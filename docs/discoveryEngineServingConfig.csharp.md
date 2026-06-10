# `discoveryEngineServingConfig` Submodule <a name="`discoveryEngineServingConfig` Submodule" id="@cdktn/provider-google.discoveryEngineServingConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DiscoveryEngineServingConfig <a name="DiscoveryEngineServingConfig" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_serving_config google_discovery_engine_serving_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineServingConfig(Construct Scope, string Id, DiscoveryEngineServingConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig">DiscoveryEngineServingConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig">DiscoveryEngineServingConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.resetBoostControlIds">ResetBoostControlIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.resetCollectionId">ResetCollectionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.resetFilterControlIds">ResetFilterControlIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.resetPromoteControlIds">ResetPromoteControlIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.resetRedirectControlIds">ResetRedirectControlIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.resetServingConfigId">ResetServingConfigId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.resetSynonymsControlIds">ResetSynonymsControlIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.putTimeouts"></a>

```csharp
private void PutTimeouts(DiscoveryEngineServingConfigTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeouts">DiscoveryEngineServingConfigTimeouts</a>

---

##### `ResetBoostControlIds` <a name="ResetBoostControlIds" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.resetBoostControlIds"></a>

```csharp
private void ResetBoostControlIds()
```

##### `ResetCollectionId` <a name="ResetCollectionId" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.resetCollectionId"></a>

```csharp
private void ResetCollectionId()
```

##### `ResetFilterControlIds` <a name="ResetFilterControlIds" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.resetFilterControlIds"></a>

```csharp
private void ResetFilterControlIds()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetPromoteControlIds` <a name="ResetPromoteControlIds" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.resetPromoteControlIds"></a>

```csharp
private void ResetPromoteControlIds()
```

##### `ResetRedirectControlIds` <a name="ResetRedirectControlIds" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.resetRedirectControlIds"></a>

```csharp
private void ResetRedirectControlIds()
```

##### `ResetServingConfigId` <a name="ResetServingConfigId" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.resetServingConfigId"></a>

```csharp
private void ResetServingConfigId()
```

##### `ResetSynonymsControlIds` <a name="ResetSynonymsControlIds" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.resetSynonymsControlIds"></a>

```csharp
private void ResetSynonymsControlIds()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DiscoveryEngineServingConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DiscoveryEngineServingConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DiscoveryEngineServingConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DiscoveryEngineServingConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DiscoveryEngineServingConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DiscoveryEngineServingConfig resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DiscoveryEngineServingConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DiscoveryEngineServingConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_serving_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DiscoveryEngineServingConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference">DiscoveryEngineServingConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.boostControlIdsInput">BoostControlIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.collectionIdInput">CollectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.engineIdInput">EngineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.filterControlIdsInput">FilterControlIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.promoteControlIdsInput">PromoteControlIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.redirectControlIdsInput">RedirectControlIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.servingConfigIdInput">ServingConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.synonymsControlIdsInput">SynonymsControlIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeouts">DiscoveryEngineServingConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.boostControlIds">BoostControlIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.collectionId">CollectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.engineId">EngineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.filterControlIds">FilterControlIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.promoteControlIds">PromoteControlIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.redirectControlIds">RedirectControlIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.servingConfigId">ServingConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.synonymsControlIds">SynonymsControlIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.timeouts"></a>

```csharp
public DiscoveryEngineServingConfigTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference">DiscoveryEngineServingConfigTimeoutsOutputReference</a>

---

##### `BoostControlIdsInput`<sup>Optional</sup> <a name="BoostControlIdsInput" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.boostControlIdsInput"></a>

```csharp
public string[] BoostControlIdsInput { get; }
```

- *Type:* string[]

---

##### `CollectionIdInput`<sup>Optional</sup> <a name="CollectionIdInput" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.collectionIdInput"></a>

```csharp
public string CollectionIdInput { get; }
```

- *Type:* string

---

##### `EngineIdInput`<sup>Optional</sup> <a name="EngineIdInput" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.engineIdInput"></a>

```csharp
public string EngineIdInput { get; }
```

- *Type:* string

---

##### `FilterControlIdsInput`<sup>Optional</sup> <a name="FilterControlIdsInput" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.filterControlIdsInput"></a>

```csharp
public string[] FilterControlIdsInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `PromoteControlIdsInput`<sup>Optional</sup> <a name="PromoteControlIdsInput" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.promoteControlIdsInput"></a>

```csharp
public string[] PromoteControlIdsInput { get; }
```

- *Type:* string[]

---

##### `RedirectControlIdsInput`<sup>Optional</sup> <a name="RedirectControlIdsInput" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.redirectControlIdsInput"></a>

```csharp
public string[] RedirectControlIdsInput { get; }
```

- *Type:* string[]

---

##### `ServingConfigIdInput`<sup>Optional</sup> <a name="ServingConfigIdInput" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.servingConfigIdInput"></a>

```csharp
public string ServingConfigIdInput { get; }
```

- *Type:* string

---

##### `SynonymsControlIdsInput`<sup>Optional</sup> <a name="SynonymsControlIdsInput" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.synonymsControlIdsInput"></a>

```csharp
public string[] SynonymsControlIdsInput { get; }
```

- *Type:* string[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.timeoutsInput"></a>

```csharp
public IResolvable|DiscoveryEngineServingConfigTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeouts">DiscoveryEngineServingConfigTimeouts</a>

---

##### `BoostControlIds`<sup>Required</sup> <a name="BoostControlIds" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.boostControlIds"></a>

```csharp
public string[] BoostControlIds { get; }
```

- *Type:* string[]

---

##### `CollectionId`<sup>Required</sup> <a name="CollectionId" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.collectionId"></a>

```csharp
public string CollectionId { get; }
```

- *Type:* string

---

##### `EngineId`<sup>Required</sup> <a name="EngineId" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.engineId"></a>

```csharp
public string EngineId { get; }
```

- *Type:* string

---

##### `FilterControlIds`<sup>Required</sup> <a name="FilterControlIds" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.filterControlIds"></a>

```csharp
public string[] FilterControlIds { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `PromoteControlIds`<sup>Required</sup> <a name="PromoteControlIds" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.promoteControlIds"></a>

```csharp
public string[] PromoteControlIds { get; }
```

- *Type:* string[]

---

##### `RedirectControlIds`<sup>Required</sup> <a name="RedirectControlIds" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.redirectControlIds"></a>

```csharp
public string[] RedirectControlIds { get; }
```

- *Type:* string[]

---

##### `ServingConfigId`<sup>Required</sup> <a name="ServingConfigId" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.servingConfigId"></a>

```csharp
public string ServingConfigId { get; }
```

- *Type:* string

---

##### `SynonymsControlIds`<sup>Required</sup> <a name="SynonymsControlIds" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.synonymsControlIds"></a>

```csharp
public string[] SynonymsControlIds { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DiscoveryEngineServingConfigConfig <a name="DiscoveryEngineServingConfigConfig" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineServingConfigConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string EngineId,
    string Location,
    string[] BoostControlIds = null,
    string CollectionId = null,
    string[] FilterControlIds = null,
    string Id = null,
    string Project = null,
    string[] PromoteControlIds = null,
    string[] RedirectControlIds = null,
    string ServingConfigId = null,
    string[] SynonymsControlIds = null,
    DiscoveryEngineServingConfigTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.engineId">EngineId</a></code> | <code>string</code> | The ID of the engine associated with the serving config. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.location">Location</a></code> | <code>string</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.boostControlIds">BoostControlIds</a></code> | <code>string[]</code> | The resource IDs of the boost controls to be applied. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.collectionId">CollectionId</a></code> | <code>string</code> | The collection ID. Currently only accepts "default_collection". |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.filterControlIds">FilterControlIds</a></code> | <code>string[]</code> | The resource IDs of the filter controls to be applied. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_serving_config#id DiscoveryEngineServingConfig#id}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_serving_config#project DiscoveryEngineServingConfig#project}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.promoteControlIds">PromoteControlIds</a></code> | <code>string[]</code> | The resource IDs of the promote controls to be applied. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.redirectControlIds">RedirectControlIds</a></code> | <code>string[]</code> | The resource IDs of the redirect controls to be applied. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.servingConfigId">ServingConfigId</a></code> | <code>string</code> | 'The unique ID of the serving config. Currently only accepts "default_search".'. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.synonymsControlIds">SynonymsControlIds</a></code> | <code>string[]</code> | The resource IDs of the synonyms controls to be applied. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeouts">DiscoveryEngineServingConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `EngineId`<sup>Required</sup> <a name="EngineId" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.engineId"></a>

```csharp
public string EngineId { get; set; }
```

- *Type:* string

The ID of the engine associated with the serving config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_serving_config#engine_id DiscoveryEngineServingConfig#engine_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_serving_config#location DiscoveryEngineServingConfig#location}

---

##### `BoostControlIds`<sup>Optional</sup> <a name="BoostControlIds" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.boostControlIds"></a>

```csharp
public string[] BoostControlIds { get; set; }
```

- *Type:* string[]

The resource IDs of the boost controls to be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_serving_config#boost_control_ids DiscoveryEngineServingConfig#boost_control_ids}

---

##### `CollectionId`<sup>Optional</sup> <a name="CollectionId" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.collectionId"></a>

```csharp
public string CollectionId { get; set; }
```

- *Type:* string

The collection ID. Currently only accepts "default_collection".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_serving_config#collection_id DiscoveryEngineServingConfig#collection_id}

---

##### `FilterControlIds`<sup>Optional</sup> <a name="FilterControlIds" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.filterControlIds"></a>

```csharp
public string[] FilterControlIds { get; set; }
```

- *Type:* string[]

The resource IDs of the filter controls to be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_serving_config#filter_control_ids DiscoveryEngineServingConfig#filter_control_ids}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_serving_config#id DiscoveryEngineServingConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_serving_config#project DiscoveryEngineServingConfig#project}.

---

##### `PromoteControlIds`<sup>Optional</sup> <a name="PromoteControlIds" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.promoteControlIds"></a>

```csharp
public string[] PromoteControlIds { get; set; }
```

- *Type:* string[]

The resource IDs of the promote controls to be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_serving_config#promote_control_ids DiscoveryEngineServingConfig#promote_control_ids}

---

##### `RedirectControlIds`<sup>Optional</sup> <a name="RedirectControlIds" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.redirectControlIds"></a>

```csharp
public string[] RedirectControlIds { get; set; }
```

- *Type:* string[]

The resource IDs of the redirect controls to be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_serving_config#redirect_control_ids DiscoveryEngineServingConfig#redirect_control_ids}

---

##### `ServingConfigId`<sup>Optional</sup> <a name="ServingConfigId" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.servingConfigId"></a>

```csharp
public string ServingConfigId { get; set; }
```

- *Type:* string

'The unique ID of the serving config. Currently only accepts "default_search".'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_serving_config#serving_config_id DiscoveryEngineServingConfig#serving_config_id}

---

##### `SynonymsControlIds`<sup>Optional</sup> <a name="SynonymsControlIds" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.synonymsControlIds"></a>

```csharp
public string[] SynonymsControlIds { get; set; }
```

- *Type:* string[]

The resource IDs of the synonyms controls to be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_serving_config#synonyms_control_ids DiscoveryEngineServingConfig#synonyms_control_ids}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigConfig.property.timeouts"></a>

```csharp
public DiscoveryEngineServingConfigTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeouts">DiscoveryEngineServingConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_serving_config#timeouts DiscoveryEngineServingConfig#timeouts}

---

### DiscoveryEngineServingConfigTimeouts <a name="DiscoveryEngineServingConfigTimeouts" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineServingConfigTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_serving_config#create DiscoveryEngineServingConfig#create}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_serving_config#delete DiscoveryEngineServingConfig#delete}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_serving_config#update DiscoveryEngineServingConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_serving_config#create DiscoveryEngineServingConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_serving_config#delete DiscoveryEngineServingConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/discovery_engine_serving_config#update DiscoveryEngineServingConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DiscoveryEngineServingConfigTimeoutsOutputReference <a name="DiscoveryEngineServingConfigTimeoutsOutputReference" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DiscoveryEngineServingConfigTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeouts">DiscoveryEngineServingConfigTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DiscoveryEngineServingConfigTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineServingConfig.DiscoveryEngineServingConfigTimeouts">DiscoveryEngineServingConfigTimeouts</a>

---



