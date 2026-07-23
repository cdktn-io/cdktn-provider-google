# `iamWorkforcePoolProviderScimTenant` Submodule <a name="`iamWorkforcePoolProviderScimTenant` Submodule" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamWorkforcePoolProviderScimTenant <a name="IamWorkforcePoolProviderScimTenant" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iam_workforce_pool_provider_scim_tenant google_iam_workforce_pool_provider_scim_tenant}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new IamWorkforcePoolProviderScimTenant(Construct Scope, string Id, IamWorkforcePoolProviderScimTenantConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig">IamWorkforcePoolProviderScimTenantConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig">IamWorkforcePoolProviderScimTenantConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.resetClaimMapping">ResetClaimMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.resetHardDelete">ResetHardDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.putTimeouts"></a>

```csharp
private void PutTimeouts(IamWorkforcePoolProviderScimTenantTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeouts">IamWorkforcePoolProviderScimTenantTimeouts</a>

---

##### `ResetClaimMapping` <a name="ResetClaimMapping" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.resetClaimMapping"></a>

```csharp
private void ResetClaimMapping()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetHardDelete` <a name="ResetHardDelete" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.resetHardDelete"></a>

```csharp
private void ResetHardDelete()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IamWorkforcePoolProviderScimTenant resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

IamWorkforcePoolProviderScimTenant.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

IamWorkforcePoolProviderScimTenant.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

IamWorkforcePoolProviderScimTenant.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

IamWorkforcePoolProviderScimTenant.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a IamWorkforcePoolProviderScimTenant resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IamWorkforcePoolProviderScimTenant to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IamWorkforcePoolProviderScimTenant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iam_workforce_pool_provider_scim_tenant#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the IamWorkforcePoolProviderScimTenant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.baseUri">BaseUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.purgeTime">PurgeTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.serviceAgent">ServiceAgent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference">IamWorkforcePoolProviderScimTenantTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.claimMappingInput">ClaimMappingInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.hardDeleteInput">HardDeleteInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.providerIdInput">ProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.scimTenantIdInput">ScimTenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeouts">IamWorkforcePoolProviderScimTenantTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.workforcePoolIdInput">WorkforcePoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.claimMapping">ClaimMapping</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.hardDelete">HardDelete</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.providerId">ProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.scimTenantId">ScimTenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.workforcePoolId">WorkforcePoolId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BaseUri`<sup>Required</sup> <a name="BaseUri" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.baseUri"></a>

```csharp
public string BaseUri { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PurgeTime`<sup>Required</sup> <a name="PurgeTime" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.purgeTime"></a>

```csharp
public string PurgeTime { get; }
```

- *Type:* string

---

##### `ServiceAgent`<sup>Required</sup> <a name="ServiceAgent" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.serviceAgent"></a>

```csharp
public string ServiceAgent { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.timeouts"></a>

```csharp
public IamWorkforcePoolProviderScimTenantTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference">IamWorkforcePoolProviderScimTenantTimeoutsOutputReference</a>

---

##### `ClaimMappingInput`<sup>Optional</sup> <a name="ClaimMappingInput" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.claimMappingInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ClaimMappingInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `HardDeleteInput`<sup>Optional</sup> <a name="HardDeleteInput" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.hardDeleteInput"></a>

```csharp
public bool|IResolvable HardDeleteInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProviderIdInput`<sup>Optional</sup> <a name="ProviderIdInput" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.providerIdInput"></a>

```csharp
public string ProviderIdInput { get; }
```

- *Type:* string

---

##### `ScimTenantIdInput`<sup>Optional</sup> <a name="ScimTenantIdInput" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.scimTenantIdInput"></a>

```csharp
public string ScimTenantIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.timeoutsInput"></a>

```csharp
public IResolvable|IamWorkforcePoolProviderScimTenantTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeouts">IamWorkforcePoolProviderScimTenantTimeouts</a>

---

##### `WorkforcePoolIdInput`<sup>Optional</sup> <a name="WorkforcePoolIdInput" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.workforcePoolIdInput"></a>

```csharp
public string WorkforcePoolIdInput { get; }
```

- *Type:* string

---

##### `ClaimMapping`<sup>Required</sup> <a name="ClaimMapping" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.claimMapping"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ClaimMapping { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `HardDelete`<sup>Required</sup> <a name="HardDelete" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.hardDelete"></a>

```csharp
public bool|IResolvable HardDelete { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `ProviderId`<sup>Required</sup> <a name="ProviderId" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.providerId"></a>

```csharp
public string ProviderId { get; }
```

- *Type:* string

---

##### `ScimTenantId`<sup>Required</sup> <a name="ScimTenantId" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.scimTenantId"></a>

```csharp
public string ScimTenantId { get; }
```

- *Type:* string

---

##### `WorkforcePoolId`<sup>Required</sup> <a name="WorkforcePoolId" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.workforcePoolId"></a>

```csharp
public string WorkforcePoolId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenant.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IamWorkforcePoolProviderScimTenantConfig <a name="IamWorkforcePoolProviderScimTenantConfig" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new IamWorkforcePoolProviderScimTenantConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string ProviderId,
    string ScimTenantId,
    string WorkforcePoolId,
    System.Collections.Generic.IDictionary<string, string> ClaimMapping = null,
    string DeletionPolicy = null,
    string Description = null,
    string DisplayName = null,
    bool|IResolvable HardDelete = null,
    string Id = null,
    IamWorkforcePoolProviderScimTenantTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.location">Location</a></code> | <code>string</code> | The location for the resource. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.providerId">ProviderId</a></code> | <code>string</code> | The ID of the provider. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.scimTenantId">ScimTenantId</a></code> | <code>string</code> | The ID to use for the SCIM tenant, which becomes the final component of the resource name. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.workforcePoolId">WorkforcePoolId</a></code> | <code>string</code> | The ID of the workforce pool. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.claimMapping">ClaimMapping</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Maps BYOID claims to SCIM claims. This is a required field for new SCIM Tenants being created. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.description">Description</a></code> | <code>string</code> | A user-specified description of the provider. Cannot exceed 256 characters. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.displayName">DisplayName</a></code> | <code>string</code> | A user-specified display name for the scim tenant. Cannot exceed 32 characters. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.hardDelete">HardDelete</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Deletes the SCIM tenant immediately. This operation cannot be undone. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iam_workforce_pool_provider_scim_tenant#id IamWorkforcePoolProviderScimTenant#id}. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeouts">IamWorkforcePoolProviderScimTenantTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iam_workforce_pool_provider_scim_tenant#location IamWorkforcePoolProviderScimTenant#location}

---

##### `ProviderId`<sup>Required</sup> <a name="ProviderId" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.providerId"></a>

```csharp
public string ProviderId { get; set; }
```

- *Type:* string

The ID of the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iam_workforce_pool_provider_scim_tenant#provider_id IamWorkforcePoolProviderScimTenant#provider_id}

---

##### `ScimTenantId`<sup>Required</sup> <a name="ScimTenantId" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.scimTenantId"></a>

```csharp
public string ScimTenantId { get; set; }
```

- *Type:* string

The ID to use for the SCIM tenant, which becomes the final component of the resource name.

This value must be 4-32 characters, and may contain the characters [a-z0-9-].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iam_workforce_pool_provider_scim_tenant#scim_tenant_id IamWorkforcePoolProviderScimTenant#scim_tenant_id}

---

##### `WorkforcePoolId`<sup>Required</sup> <a name="WorkforcePoolId" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.workforcePoolId"></a>

```csharp
public string WorkforcePoolId { get; set; }
```

- *Type:* string

The ID of the workforce pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iam_workforce_pool_provider_scim_tenant#workforce_pool_id IamWorkforcePoolProviderScimTenant#workforce_pool_id}

---

##### `ClaimMapping`<sup>Optional</sup> <a name="ClaimMapping" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.claimMapping"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ClaimMapping { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Maps BYOID claims to SCIM claims. This is a required field for new SCIM Tenants being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iam_workforce_pool_provider_scim_tenant#claim_mapping IamWorkforcePoolProviderScimTenant#claim_mapping}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iam_workforce_pool_provider_scim_tenant#deletion_policy IamWorkforcePoolProviderScimTenant#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A user-specified description of the provider. Cannot exceed 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iam_workforce_pool_provider_scim_tenant#description IamWorkforcePoolProviderScimTenant#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

A user-specified display name for the scim tenant. Cannot exceed 32 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iam_workforce_pool_provider_scim_tenant#display_name IamWorkforcePoolProviderScimTenant#display_name}

---

##### `HardDelete`<sup>Optional</sup> <a name="HardDelete" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.hardDelete"></a>

```csharp
public bool|IResolvable HardDelete { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Deletes the SCIM tenant immediately. This operation cannot be undone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iam_workforce_pool_provider_scim_tenant#hard_delete IamWorkforcePoolProviderScimTenant#hard_delete}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iam_workforce_pool_provider_scim_tenant#id IamWorkforcePoolProviderScimTenant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantConfig.property.timeouts"></a>

```csharp
public IamWorkforcePoolProviderScimTenantTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeouts">IamWorkforcePoolProviderScimTenantTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iam_workforce_pool_provider_scim_tenant#timeouts IamWorkforcePoolProviderScimTenant#timeouts}

---

### IamWorkforcePoolProviderScimTenantTimeouts <a name="IamWorkforcePoolProviderScimTenantTimeouts" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new IamWorkforcePoolProviderScimTenantTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iam_workforce_pool_provider_scim_tenant#create IamWorkforcePoolProviderScimTenant#create}. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iam_workforce_pool_provider_scim_tenant#delete IamWorkforcePoolProviderScimTenant#delete}. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iam_workforce_pool_provider_scim_tenant#update IamWorkforcePoolProviderScimTenant#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iam_workforce_pool_provider_scim_tenant#create IamWorkforcePoolProviderScimTenant#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iam_workforce_pool_provider_scim_tenant#delete IamWorkforcePoolProviderScimTenant#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iam_workforce_pool_provider_scim_tenant#update IamWorkforcePoolProviderScimTenant#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IamWorkforcePoolProviderScimTenantTimeoutsOutputReference <a name="IamWorkforcePoolProviderScimTenantTimeoutsOutputReference" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new IamWorkforcePoolProviderScimTenantTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeouts">IamWorkforcePoolProviderScimTenantTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IamWorkforcePoolProviderScimTenantTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimTenant.IamWorkforcePoolProviderScimTenantTimeouts">IamWorkforcePoolProviderScimTenantTimeouts</a>

---



