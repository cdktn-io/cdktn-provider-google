# `discoveryEngineAssistant` Submodule <a name="`discoveryEngineAssistant` Submodule" id="@cdktn/provider-google.discoveryEngineAssistant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DiscoveryEngineAssistant <a name="DiscoveryEngineAssistant" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_assistant google_discovery_engine_assistant}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineAssistant(Construct Scope, string Id, DiscoveryEngineAssistantConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig">DiscoveryEngineAssistantConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig">DiscoveryEngineAssistantConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.putCustomerPolicy">PutCustomerPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.putGenerationConfig">PutGenerationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.resetCustomerPolicy">ResetCustomerPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.resetGenerationConfig">ResetGenerationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.resetWebGroundingType">ResetWebGroundingType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCustomerPolicy` <a name="PutCustomerPolicy" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.putCustomerPolicy"></a>

```csharp
private void PutCustomerPolicy(DiscoveryEngineAssistantCustomerPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.putCustomerPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicy">DiscoveryEngineAssistantCustomerPolicy</a>

---

##### `PutGenerationConfig` <a name="PutGenerationConfig" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.putGenerationConfig"></a>

```csharp
private void PutGenerationConfig(DiscoveryEngineAssistantGenerationConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.putGenerationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfig">DiscoveryEngineAssistantGenerationConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.putTimeouts"></a>

```csharp
private void PutTimeouts(DiscoveryEngineAssistantTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeouts">DiscoveryEngineAssistantTimeouts</a>

---

##### `ResetCustomerPolicy` <a name="ResetCustomerPolicy" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.resetCustomerPolicy"></a>

```csharp
private void ResetCustomerPolicy()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetGenerationConfig` <a name="ResetGenerationConfig" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.resetGenerationConfig"></a>

```csharp
private void ResetGenerationConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetWebGroundingType` <a name="ResetWebGroundingType" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.resetWebGroundingType"></a>

```csharp
private void ResetWebGroundingType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DiscoveryEngineAssistant resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DiscoveryEngineAssistant.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DiscoveryEngineAssistant.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DiscoveryEngineAssistant.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DiscoveryEngineAssistant.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DiscoveryEngineAssistant resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DiscoveryEngineAssistant to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DiscoveryEngineAssistant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_assistant#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DiscoveryEngineAssistant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.customerPolicy">CustomerPolicy</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference">DiscoveryEngineAssistantCustomerPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.generationConfig">GenerationConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference">DiscoveryEngineAssistantGenerationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference">DiscoveryEngineAssistantTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.assistantIdInput">AssistantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.collectionIdInput">CollectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.customerPolicyInput">CustomerPolicyInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicy">DiscoveryEngineAssistantCustomerPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.engineIdInput">EngineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.generationConfigInput">GenerationConfigInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfig">DiscoveryEngineAssistantGenerationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeouts">DiscoveryEngineAssistantTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.webGroundingTypeInput">WebGroundingTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.assistantId">AssistantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.collectionId">CollectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.engineId">EngineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.webGroundingType">WebGroundingType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CustomerPolicy`<sup>Required</sup> <a name="CustomerPolicy" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.customerPolicy"></a>

```csharp
public DiscoveryEngineAssistantCustomerPolicyOutputReference CustomerPolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference">DiscoveryEngineAssistantCustomerPolicyOutputReference</a>

---

##### `GenerationConfig`<sup>Required</sup> <a name="GenerationConfig" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.generationConfig"></a>

```csharp
public DiscoveryEngineAssistantGenerationConfigOutputReference GenerationConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference">DiscoveryEngineAssistantGenerationConfigOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.timeouts"></a>

```csharp
public DiscoveryEngineAssistantTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference">DiscoveryEngineAssistantTimeoutsOutputReference</a>

---

##### `AssistantIdInput`<sup>Optional</sup> <a name="AssistantIdInput" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.assistantIdInput"></a>

```csharp
public string AssistantIdInput { get; }
```

- *Type:* string

---

##### `CollectionIdInput`<sup>Optional</sup> <a name="CollectionIdInput" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.collectionIdInput"></a>

```csharp
public string CollectionIdInput { get; }
```

- *Type:* string

---

##### `CustomerPolicyInput`<sup>Optional</sup> <a name="CustomerPolicyInput" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.customerPolicyInput"></a>

```csharp
public DiscoveryEngineAssistantCustomerPolicy CustomerPolicyInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicy">DiscoveryEngineAssistantCustomerPolicy</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EngineIdInput`<sup>Optional</sup> <a name="EngineIdInput" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.engineIdInput"></a>

```csharp
public string EngineIdInput { get; }
```

- *Type:* string

---

##### `GenerationConfigInput`<sup>Optional</sup> <a name="GenerationConfigInput" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.generationConfigInput"></a>

```csharp
public DiscoveryEngineAssistantGenerationConfig GenerationConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfig">DiscoveryEngineAssistantGenerationConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.timeoutsInput"></a>

```csharp
public IResolvable|DiscoveryEngineAssistantTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeouts">DiscoveryEngineAssistantTimeouts</a>

---

##### `WebGroundingTypeInput`<sup>Optional</sup> <a name="WebGroundingTypeInput" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.webGroundingTypeInput"></a>

```csharp
public string WebGroundingTypeInput { get; }
```

- *Type:* string

---

##### `AssistantId`<sup>Required</sup> <a name="AssistantId" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.assistantId"></a>

```csharp
public string AssistantId { get; }
```

- *Type:* string

---

##### `CollectionId`<sup>Required</sup> <a name="CollectionId" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.collectionId"></a>

```csharp
public string CollectionId { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EngineId`<sup>Required</sup> <a name="EngineId" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.engineId"></a>

```csharp
public string EngineId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `WebGroundingType`<sup>Required</sup> <a name="WebGroundingType" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.webGroundingType"></a>

```csharp
public string WebGroundingType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistant.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DiscoveryEngineAssistantConfig <a name="DiscoveryEngineAssistantConfig" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineAssistantConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AssistantId,
    string CollectionId,
    string DisplayName,
    string EngineId,
    string Location,
    DiscoveryEngineAssistantCustomerPolicy CustomerPolicy = null,
    string DeletionPolicy = null,
    string Description = null,
    DiscoveryEngineAssistantGenerationConfig GenerationConfig = null,
    string Id = null,
    string Project = null,
    DiscoveryEngineAssistantTimeouts Timeouts = null,
    string WebGroundingType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.assistantId">AssistantId</a></code> | <code>string</code> | The unique id of the assistant. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.collectionId">CollectionId</a></code> | <code>string</code> | The unique id of the collection. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The assistant display name. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.engineId">EngineId</a></code> | <code>string</code> | The unique id of the engine. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.location">Location</a></code> | <code>string</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.customerPolicy">CustomerPolicy</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicy">DiscoveryEngineAssistantCustomerPolicy</a></code> | customer_policy block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.description">Description</a></code> | <code>string</code> | Description for additional information. Expected to be shown on the configuration UI, not to the users of the assistant. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.generationConfig">GenerationConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfig">DiscoveryEngineAssistantGenerationConfig</a></code> | generation_config block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_assistant#id DiscoveryEngineAssistant#id}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_assistant#project DiscoveryEngineAssistant#project}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeouts">DiscoveryEngineAssistantTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.webGroundingType">WebGroundingType</a></code> | <code>string</code> | The type of web grounding to use. The supported values: 'WEB_GROUNDING_TYPE_DISABLED', 'WEB_GROUNDING_TYPE_GOOGLE_SEARCH', 'WEB_GROUNDING_TYPE_ENTERPRISE_WEB_SEARCH'. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AssistantId`<sup>Required</sup> <a name="AssistantId" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.assistantId"></a>

```csharp
public string AssistantId { get; set; }
```

- *Type:* string

The unique id of the assistant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_assistant#assistant_id DiscoveryEngineAssistant#assistant_id}

---

##### `CollectionId`<sup>Required</sup> <a name="CollectionId" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.collectionId"></a>

```csharp
public string CollectionId { get; set; }
```

- *Type:* string

The unique id of the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_assistant#collection_id DiscoveryEngineAssistant#collection_id}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The assistant display name.

It must be a UTF-8 encoded string with a length limit of 128 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_assistant#display_name DiscoveryEngineAssistant#display_name}

---

##### `EngineId`<sup>Required</sup> <a name="EngineId" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.engineId"></a>

```csharp
public string EngineId { get; set; }
```

- *Type:* string

The unique id of the engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_assistant#engine_id DiscoveryEngineAssistant#engine_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_assistant#location DiscoveryEngineAssistant#location}

---

##### `CustomerPolicy`<sup>Optional</sup> <a name="CustomerPolicy" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.customerPolicy"></a>

```csharp
public DiscoveryEngineAssistantCustomerPolicy CustomerPolicy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicy">DiscoveryEngineAssistantCustomerPolicy</a>

customer_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_assistant#customer_policy DiscoveryEngineAssistant#customer_policy}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_assistant#deletion_policy DiscoveryEngineAssistant#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description for additional information. Expected to be shown on the configuration UI, not to the users of the assistant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_assistant#description DiscoveryEngineAssistant#description}

---

##### `GenerationConfig`<sup>Optional</sup> <a name="GenerationConfig" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.generationConfig"></a>

```csharp
public DiscoveryEngineAssistantGenerationConfig GenerationConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfig">DiscoveryEngineAssistantGenerationConfig</a>

generation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_assistant#generation_config DiscoveryEngineAssistant#generation_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_assistant#id DiscoveryEngineAssistant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_assistant#project DiscoveryEngineAssistant#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.timeouts"></a>

```csharp
public DiscoveryEngineAssistantTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeouts">DiscoveryEngineAssistantTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_assistant#timeouts DiscoveryEngineAssistant#timeouts}

---

##### `WebGroundingType`<sup>Optional</sup> <a name="WebGroundingType" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantConfig.property.webGroundingType"></a>

```csharp
public string WebGroundingType { get; set; }
```

- *Type:* string

The type of web grounding to use. The supported values: 'WEB_GROUNDING_TYPE_DISABLED', 'WEB_GROUNDING_TYPE_GOOGLE_SEARCH', 'WEB_GROUNDING_TYPE_ENTERPRISE_WEB_SEARCH'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_assistant#web_grounding_type DiscoveryEngineAssistant#web_grounding_type}

---

### DiscoveryEngineAssistantCustomerPolicy <a name="DiscoveryEngineAssistantCustomerPolicy" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineAssistantCustomerPolicy {
    IResolvable|DiscoveryEngineAssistantCustomerPolicyBannedPhrases[] BannedPhrases = null,
    DiscoveryEngineAssistantCustomerPolicyModelArmorConfig ModelArmorConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicy.property.bannedPhrases">BannedPhrases</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrases">DiscoveryEngineAssistantCustomerPolicyBannedPhrases</a>[]</code> | banned_phrases block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicy.property.modelArmorConfig">ModelArmorConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfig">DiscoveryEngineAssistantCustomerPolicyModelArmorConfig</a></code> | model_armor_config block. |

---

##### `BannedPhrases`<sup>Optional</sup> <a name="BannedPhrases" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicy.property.bannedPhrases"></a>

```csharp
public IResolvable|DiscoveryEngineAssistantCustomerPolicyBannedPhrases[] BannedPhrases { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrases">DiscoveryEngineAssistantCustomerPolicyBannedPhrases</a>[]

banned_phrases block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_assistant#banned_phrases DiscoveryEngineAssistant#banned_phrases}

---

##### `ModelArmorConfig`<sup>Optional</sup> <a name="ModelArmorConfig" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicy.property.modelArmorConfig"></a>

```csharp
public DiscoveryEngineAssistantCustomerPolicyModelArmorConfig ModelArmorConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfig">DiscoveryEngineAssistantCustomerPolicyModelArmorConfig</a>

model_armor_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_assistant#model_armor_config DiscoveryEngineAssistant#model_armor_config}

---

### DiscoveryEngineAssistantCustomerPolicyBannedPhrases <a name="DiscoveryEngineAssistantCustomerPolicyBannedPhrases" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrases"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrases.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineAssistantCustomerPolicyBannedPhrases {
    string Phrase,
    bool|IResolvable IgnoreDiacritics = null,
    string MatchType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrases.property.phrase">Phrase</a></code> | <code>string</code> | The raw string content to be banned. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrases.property.ignoreDiacritics">IgnoreDiacritics</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, diacritical marks (e.g., accents, umlauts) are ignored when matching banned phrases. For example, "cafe" would match "café". |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrases.property.matchType">MatchType</a></code> | <code>string</code> | Match type for the banned phrase. The supported values: 'SIMPLE_STRING_MATCH', 'WORD_BOUNDARY_STRING_MATCH'. |

---

##### `Phrase`<sup>Required</sup> <a name="Phrase" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrases.property.phrase"></a>

```csharp
public string Phrase { get; set; }
```

- *Type:* string

The raw string content to be banned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_assistant#phrase DiscoveryEngineAssistant#phrase}

---

##### `IgnoreDiacritics`<sup>Optional</sup> <a name="IgnoreDiacritics" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrases.property.ignoreDiacritics"></a>

```csharp
public bool|IResolvable IgnoreDiacritics { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, diacritical marks (e.g., accents, umlauts) are ignored when matching banned phrases. For example, "cafe" would match "café".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_assistant#ignore_diacritics DiscoveryEngineAssistant#ignore_diacritics}

---

##### `MatchType`<sup>Optional</sup> <a name="MatchType" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrases.property.matchType"></a>

```csharp
public string MatchType { get; set; }
```

- *Type:* string

Match type for the banned phrase. The supported values: 'SIMPLE_STRING_MATCH', 'WORD_BOUNDARY_STRING_MATCH'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_assistant#match_type DiscoveryEngineAssistant#match_type}

---

### DiscoveryEngineAssistantCustomerPolicyModelArmorConfig <a name="DiscoveryEngineAssistantCustomerPolicyModelArmorConfig" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineAssistantCustomerPolicyModelArmorConfig {
    string ResponseTemplate,
    string UserPromptTemplate,
    string FailureMode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfig.property.responseTemplate">ResponseTemplate</a></code> | <code>string</code> | The resource name of the Model Armor template for sanitizing assistant responses. Format: 'projects/{project}/locations/{location}/templates/{template_id}'. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfig.property.userPromptTemplate">UserPromptTemplate</a></code> | <code>string</code> | The resource name of the Model Armor template for sanitizing user prompts. Format: 'projects/{project}/locations/{location}/templates/{template_id}'. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfig.property.failureMode">FailureMode</a></code> | <code>string</code> | Defines the failure mode for Model Armor sanitization. The supported values: 'FAIL_OPEN', 'FAIL_CLOSED'. |

---

##### `ResponseTemplate`<sup>Required</sup> <a name="ResponseTemplate" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfig.property.responseTemplate"></a>

```csharp
public string ResponseTemplate { get; set; }
```

- *Type:* string

The resource name of the Model Armor template for sanitizing assistant responses. Format: 'projects/{project}/locations/{location}/templates/{template_id}'.

If not specified, no sanitization will be applied to the assistant
response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_assistant#response_template DiscoveryEngineAssistant#response_template}

---

##### `UserPromptTemplate`<sup>Required</sup> <a name="UserPromptTemplate" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfig.property.userPromptTemplate"></a>

```csharp
public string UserPromptTemplate { get; set; }
```

- *Type:* string

The resource name of the Model Armor template for sanitizing user prompts. Format: 'projects/{project}/locations/{location}/templates/{template_id}'.

If not specified, no sanitization will be applied to the user prompt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_assistant#user_prompt_template DiscoveryEngineAssistant#user_prompt_template}

---

##### `FailureMode`<sup>Optional</sup> <a name="FailureMode" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfig.property.failureMode"></a>

```csharp
public string FailureMode { get; set; }
```

- *Type:* string

Defines the failure mode for Model Armor sanitization. The supported values: 'FAIL_OPEN', 'FAIL_CLOSED'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_assistant#failure_mode DiscoveryEngineAssistant#failure_mode}

---

### DiscoveryEngineAssistantGenerationConfig <a name="DiscoveryEngineAssistantGenerationConfig" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineAssistantGenerationConfig {
    string DefaultLanguage = null,
    DiscoveryEngineAssistantGenerationConfigSystemInstruction SystemInstruction = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfig.property.defaultLanguage">DefaultLanguage</a></code> | <code>string</code> | The default language to use for the generation of the assistant response. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfig.property.systemInstruction">SystemInstruction</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstruction">DiscoveryEngineAssistantGenerationConfigSystemInstruction</a></code> | system_instruction block. |

---

##### `DefaultLanguage`<sup>Optional</sup> <a name="DefaultLanguage" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfig.property.defaultLanguage"></a>

```csharp
public string DefaultLanguage { get; set; }
```

- *Type:* string

The default language to use for the generation of the assistant response.

Use an ISO 639-1 language code such as 'en'.
If not specified, the language will be automatically detected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_assistant#default_language DiscoveryEngineAssistant#default_language}

---

##### `SystemInstruction`<sup>Optional</sup> <a name="SystemInstruction" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfig.property.systemInstruction"></a>

```csharp
public DiscoveryEngineAssistantGenerationConfigSystemInstruction SystemInstruction { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstruction">DiscoveryEngineAssistantGenerationConfigSystemInstruction</a>

system_instruction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_assistant#system_instruction DiscoveryEngineAssistant#system_instruction}

---

### DiscoveryEngineAssistantGenerationConfigSystemInstruction <a name="DiscoveryEngineAssistantGenerationConfigSystemInstruction" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstruction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstruction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineAssistantGenerationConfigSystemInstruction {
    string AdditionalSystemInstruction = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstruction.property.additionalSystemInstruction">AdditionalSystemInstruction</a></code> | <code>string</code> | Additional system instruction that will be added to the default system instruction. |

---

##### `AdditionalSystemInstruction`<sup>Optional</sup> <a name="AdditionalSystemInstruction" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstruction.property.additionalSystemInstruction"></a>

```csharp
public string AdditionalSystemInstruction { get; set; }
```

- *Type:* string

Additional system instruction that will be added to the default system instruction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_assistant#additional_system_instruction DiscoveryEngineAssistant#additional_system_instruction}

---

### DiscoveryEngineAssistantTimeouts <a name="DiscoveryEngineAssistantTimeouts" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineAssistantTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_assistant#create DiscoveryEngineAssistant#create}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_assistant#delete DiscoveryEngineAssistant#delete}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_assistant#update DiscoveryEngineAssistant#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_assistant#create DiscoveryEngineAssistant#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_assistant#delete DiscoveryEngineAssistant#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/discovery_engine_assistant#update DiscoveryEngineAssistant#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList <a name="DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.get"></a>

```csharp
private DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrases">DiscoveryEngineAssistantCustomerPolicyBannedPhrases</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.property.internalValue"></a>

```csharp
public IResolvable|DiscoveryEngineAssistantCustomerPolicyBannedPhrases[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrases">DiscoveryEngineAssistantCustomerPolicyBannedPhrases</a>[]

---


### DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference <a name="DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.resetIgnoreDiacritics">ResetIgnoreDiacritics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.resetMatchType">ResetMatchType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIgnoreDiacritics` <a name="ResetIgnoreDiacritics" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.resetIgnoreDiacritics"></a>

```csharp
private void ResetIgnoreDiacritics()
```

##### `ResetMatchType` <a name="ResetMatchType" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.resetMatchType"></a>

```csharp
private void ResetMatchType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.ignoreDiacriticsInput">IgnoreDiacriticsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.matchTypeInput">MatchTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.phraseInput">PhraseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.ignoreDiacritics">IgnoreDiacritics</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.matchType">MatchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.phrase">Phrase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrases">DiscoveryEngineAssistantCustomerPolicyBannedPhrases</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IgnoreDiacriticsInput`<sup>Optional</sup> <a name="IgnoreDiacriticsInput" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.ignoreDiacriticsInput"></a>

```csharp
public bool|IResolvable IgnoreDiacriticsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MatchTypeInput`<sup>Optional</sup> <a name="MatchTypeInput" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.matchTypeInput"></a>

```csharp
public string MatchTypeInput { get; }
```

- *Type:* string

---

##### `PhraseInput`<sup>Optional</sup> <a name="PhraseInput" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.phraseInput"></a>

```csharp
public string PhraseInput { get; }
```

- *Type:* string

---

##### `IgnoreDiacritics`<sup>Required</sup> <a name="IgnoreDiacritics" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.ignoreDiacritics"></a>

```csharp
public bool|IResolvable IgnoreDiacritics { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MatchType`<sup>Required</sup> <a name="MatchType" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.matchType"></a>

```csharp
public string MatchType { get; }
```

- *Type:* string

---

##### `Phrase`<sup>Required</sup> <a name="Phrase" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.phrase"></a>

```csharp
public string Phrase { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DiscoveryEngineAssistantCustomerPolicyBannedPhrases InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrases">DiscoveryEngineAssistantCustomerPolicyBannedPhrases</a>

---


### DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference <a name="DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.resetFailureMode">ResetFailureMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFailureMode` <a name="ResetFailureMode" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.resetFailureMode"></a>

```csharp
private void ResetFailureMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.failureModeInput">FailureModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.responseTemplateInput">ResponseTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.userPromptTemplateInput">UserPromptTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.failureMode">FailureMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.responseTemplate">ResponseTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.userPromptTemplate">UserPromptTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfig">DiscoveryEngineAssistantCustomerPolicyModelArmorConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FailureModeInput`<sup>Optional</sup> <a name="FailureModeInput" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.failureModeInput"></a>

```csharp
public string FailureModeInput { get; }
```

- *Type:* string

---

##### `ResponseTemplateInput`<sup>Optional</sup> <a name="ResponseTemplateInput" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.responseTemplateInput"></a>

```csharp
public string ResponseTemplateInput { get; }
```

- *Type:* string

---

##### `UserPromptTemplateInput`<sup>Optional</sup> <a name="UserPromptTemplateInput" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.userPromptTemplateInput"></a>

```csharp
public string UserPromptTemplateInput { get; }
```

- *Type:* string

---

##### `FailureMode`<sup>Required</sup> <a name="FailureMode" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.failureMode"></a>

```csharp
public string FailureMode { get; }
```

- *Type:* string

---

##### `ResponseTemplate`<sup>Required</sup> <a name="ResponseTemplate" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.responseTemplate"></a>

```csharp
public string ResponseTemplate { get; }
```

- *Type:* string

---

##### `UserPromptTemplate`<sup>Required</sup> <a name="UserPromptTemplate" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.userPromptTemplate"></a>

```csharp
public string UserPromptTemplate { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.internalValue"></a>

```csharp
public DiscoveryEngineAssistantCustomerPolicyModelArmorConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfig">DiscoveryEngineAssistantCustomerPolicyModelArmorConfig</a>

---


### DiscoveryEngineAssistantCustomerPolicyOutputReference <a name="DiscoveryEngineAssistantCustomerPolicyOutputReference" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineAssistantCustomerPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.putBannedPhrases">PutBannedPhrases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.putModelArmorConfig">PutModelArmorConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.resetBannedPhrases">ResetBannedPhrases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.resetModelArmorConfig">ResetModelArmorConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBannedPhrases` <a name="PutBannedPhrases" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.putBannedPhrases"></a>

```csharp
private void PutBannedPhrases(IResolvable|DiscoveryEngineAssistantCustomerPolicyBannedPhrases[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.putBannedPhrases.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrases">DiscoveryEngineAssistantCustomerPolicyBannedPhrases</a>[]

---

##### `PutModelArmorConfig` <a name="PutModelArmorConfig" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.putModelArmorConfig"></a>

```csharp
private void PutModelArmorConfig(DiscoveryEngineAssistantCustomerPolicyModelArmorConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.putModelArmorConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfig">DiscoveryEngineAssistantCustomerPolicyModelArmorConfig</a>

---

##### `ResetBannedPhrases` <a name="ResetBannedPhrases" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.resetBannedPhrases"></a>

```csharp
private void ResetBannedPhrases()
```

##### `ResetModelArmorConfig` <a name="ResetModelArmorConfig" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.resetModelArmorConfig"></a>

```csharp
private void ResetModelArmorConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.property.bannedPhrases">BannedPhrases</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList">DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.property.modelArmorConfig">ModelArmorConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference">DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.property.bannedPhrasesInput">BannedPhrasesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrases">DiscoveryEngineAssistantCustomerPolicyBannedPhrases</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.property.modelArmorConfigInput">ModelArmorConfigInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfig">DiscoveryEngineAssistantCustomerPolicyModelArmorConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicy">DiscoveryEngineAssistantCustomerPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BannedPhrases`<sup>Required</sup> <a name="BannedPhrases" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.property.bannedPhrases"></a>

```csharp
public DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList BannedPhrases { get; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList">DiscoveryEngineAssistantCustomerPolicyBannedPhrasesList</a>

---

##### `ModelArmorConfig`<sup>Required</sup> <a name="ModelArmorConfig" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.property.modelArmorConfig"></a>

```csharp
public DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference ModelArmorConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference">DiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference</a>

---

##### `BannedPhrasesInput`<sup>Optional</sup> <a name="BannedPhrasesInput" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.property.bannedPhrasesInput"></a>

```csharp
public IResolvable|DiscoveryEngineAssistantCustomerPolicyBannedPhrases[] BannedPhrasesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyBannedPhrases">DiscoveryEngineAssistantCustomerPolicyBannedPhrases</a>[]

---

##### `ModelArmorConfigInput`<sup>Optional</sup> <a name="ModelArmorConfigInput" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.property.modelArmorConfigInput"></a>

```csharp
public DiscoveryEngineAssistantCustomerPolicyModelArmorConfig ModelArmorConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyModelArmorConfig">DiscoveryEngineAssistantCustomerPolicyModelArmorConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicyOutputReference.property.internalValue"></a>

```csharp
public DiscoveryEngineAssistantCustomerPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantCustomerPolicy">DiscoveryEngineAssistantCustomerPolicy</a>

---


### DiscoveryEngineAssistantGenerationConfigOutputReference <a name="DiscoveryEngineAssistantGenerationConfigOutputReference" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineAssistantGenerationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.putSystemInstruction">PutSystemInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.resetDefaultLanguage">ResetDefaultLanguage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.resetSystemInstruction">ResetSystemInstruction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSystemInstruction` <a name="PutSystemInstruction" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.putSystemInstruction"></a>

```csharp
private void PutSystemInstruction(DiscoveryEngineAssistantGenerationConfigSystemInstruction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.putSystemInstruction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstruction">DiscoveryEngineAssistantGenerationConfigSystemInstruction</a>

---

##### `ResetDefaultLanguage` <a name="ResetDefaultLanguage" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.resetDefaultLanguage"></a>

```csharp
private void ResetDefaultLanguage()
```

##### `ResetSystemInstruction` <a name="ResetSystemInstruction" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.resetSystemInstruction"></a>

```csharp
private void ResetSystemInstruction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.property.systemInstruction">SystemInstruction</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference">DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.property.defaultLanguageInput">DefaultLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.property.systemInstructionInput">SystemInstructionInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstruction">DiscoveryEngineAssistantGenerationConfigSystemInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.property.defaultLanguage">DefaultLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfig">DiscoveryEngineAssistantGenerationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SystemInstruction`<sup>Required</sup> <a name="SystemInstruction" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.property.systemInstruction"></a>

```csharp
public DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference SystemInstruction { get; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference">DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference</a>

---

##### `DefaultLanguageInput`<sup>Optional</sup> <a name="DefaultLanguageInput" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.property.defaultLanguageInput"></a>

```csharp
public string DefaultLanguageInput { get; }
```

- *Type:* string

---

##### `SystemInstructionInput`<sup>Optional</sup> <a name="SystemInstructionInput" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.property.systemInstructionInput"></a>

```csharp
public DiscoveryEngineAssistantGenerationConfigSystemInstruction SystemInstructionInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstruction">DiscoveryEngineAssistantGenerationConfigSystemInstruction</a>

---

##### `DefaultLanguage`<sup>Required</sup> <a name="DefaultLanguage" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.property.defaultLanguage"></a>

```csharp
public string DefaultLanguage { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigOutputReference.property.internalValue"></a>

```csharp
public DiscoveryEngineAssistantGenerationConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfig">DiscoveryEngineAssistantGenerationConfig</a>

---


### DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference <a name="DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.resetAdditionalSystemInstruction">ResetAdditionalSystemInstruction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdditionalSystemInstruction` <a name="ResetAdditionalSystemInstruction" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.resetAdditionalSystemInstruction"></a>

```csharp
private void ResetAdditionalSystemInstruction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.property.additionalSystemInstructionInput">AdditionalSystemInstructionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.property.additionalSystemInstruction">AdditionalSystemInstruction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstruction">DiscoveryEngineAssistantGenerationConfigSystemInstruction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalSystemInstructionInput`<sup>Optional</sup> <a name="AdditionalSystemInstructionInput" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.property.additionalSystemInstructionInput"></a>

```csharp
public string AdditionalSystemInstructionInput { get; }
```

- *Type:* string

---

##### `AdditionalSystemInstruction`<sup>Required</sup> <a name="AdditionalSystemInstruction" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.property.additionalSystemInstruction"></a>

```csharp
public string AdditionalSystemInstruction { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.property.internalValue"></a>

```csharp
public DiscoveryEngineAssistantGenerationConfigSystemInstruction InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantGenerationConfigSystemInstruction">DiscoveryEngineAssistantGenerationConfigSystemInstruction</a>

---


### DiscoveryEngineAssistantTimeoutsOutputReference <a name="DiscoveryEngineAssistantTimeoutsOutputReference" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineAssistantTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeouts">DiscoveryEngineAssistantTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DiscoveryEngineAssistantTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineAssistant.DiscoveryEngineAssistantTimeouts">DiscoveryEngineAssistantTimeouts</a>

---



