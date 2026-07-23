# `iamWorkloadIdentityPoolManagedIdentity` Submodule <a name="`iamWorkloadIdentityPoolManagedIdentity` Submodule" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamWorkloadIdentityPoolManagedIdentity <a name="IamWorkloadIdentityPoolManagedIdentity" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iam_workload_identity_pool_managed_identity google_iam_workload_identity_pool_managed_identity}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.Initializer"></a>

```typescript
import { iamWorkloadIdentityPoolManagedIdentity } from '@cdktn/provider-google'

new iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity(scope: Construct, id: string, config: IamWorkloadIdentityPoolManagedIdentityConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig">IamWorkloadIdentityPoolManagedIdentityConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig">IamWorkloadIdentityPoolManagedIdentityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.putAttestationRules">putAttestationRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.resetAttestationRules">resetAttestationRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAttestationRules` <a name="putAttestationRules" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.putAttestationRules"></a>

```typescript
public putAttestationRules(value: IResolvable | IamWorkloadIdentityPoolManagedIdentityAttestationRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.putAttestationRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRules">IamWorkloadIdentityPoolManagedIdentityAttestationRules</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.putTimeouts"></a>

```typescript
public putTimeouts(value: IamWorkloadIdentityPoolManagedIdentityTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeouts">IamWorkloadIdentityPoolManagedIdentityTimeouts</a>

---

##### `resetAttestationRules` <a name="resetAttestationRules" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.resetAttestationRules"></a>

```typescript
public resetAttestationRules(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IamWorkloadIdentityPoolManagedIdentity resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.isConstruct"></a>

```typescript
import { iamWorkloadIdentityPoolManagedIdentity } from '@cdktn/provider-google'

iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.isTerraformElement"></a>

```typescript
import { iamWorkloadIdentityPoolManagedIdentity } from '@cdktn/provider-google'

iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.isTerraformResource"></a>

```typescript
import { iamWorkloadIdentityPoolManagedIdentity } from '@cdktn/provider-google'

iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.generateConfigForImport"></a>

```typescript
import { iamWorkloadIdentityPoolManagedIdentity } from '@cdktn/provider-google'

iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IamWorkloadIdentityPoolManagedIdentity resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IamWorkloadIdentityPoolManagedIdentity to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IamWorkloadIdentityPoolManagedIdentity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iam_workload_identity_pool_managed_identity#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IamWorkloadIdentityPoolManagedIdentity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.attestationRules">attestationRules</a></code> | <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList">IamWorkloadIdentityPoolManagedIdentityAttestationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference">IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.attestationRulesInput">attestationRulesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRules">IamWorkloadIdentityPoolManagedIdentityAttestationRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeouts">IamWorkloadIdentityPoolManagedIdentityTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolIdInput">workloadIdentityPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolManagedIdentityIdInput">workloadIdentityPoolManagedIdentityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolNamespaceIdInput">workloadIdentityPoolNamespaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolId">workloadIdentityPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolManagedIdentityId">workloadIdentityPoolManagedIdentityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolNamespaceId">workloadIdentityPoolNamespaceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `attestationRules`<sup>Required</sup> <a name="attestationRules" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.attestationRules"></a>

```typescript
public readonly attestationRules: IamWorkloadIdentityPoolManagedIdentityAttestationRulesList;
```

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList">IamWorkloadIdentityPoolManagedIdentityAttestationRulesList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.timeouts"></a>

```typescript
public readonly timeouts: IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference">IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference</a>

---

##### `attestationRulesInput`<sup>Optional</sup> <a name="attestationRulesInput" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.attestationRulesInput"></a>

```typescript
public readonly attestationRulesInput: IResolvable | IamWorkloadIdentityPoolManagedIdentityAttestationRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRules">IamWorkloadIdentityPoolManagedIdentityAttestationRules</a>[]

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | IamWorkloadIdentityPoolManagedIdentityTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeouts">IamWorkloadIdentityPoolManagedIdentityTimeouts</a>

---

##### `workloadIdentityPoolIdInput`<sup>Optional</sup> <a name="workloadIdentityPoolIdInput" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolIdInput"></a>

```typescript
public readonly workloadIdentityPoolIdInput: string;
```

- *Type:* string

---

##### `workloadIdentityPoolManagedIdentityIdInput`<sup>Optional</sup> <a name="workloadIdentityPoolManagedIdentityIdInput" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolManagedIdentityIdInput"></a>

```typescript
public readonly workloadIdentityPoolManagedIdentityIdInput: string;
```

- *Type:* string

---

##### `workloadIdentityPoolNamespaceIdInput`<sup>Optional</sup> <a name="workloadIdentityPoolNamespaceIdInput" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolNamespaceIdInput"></a>

```typescript
public readonly workloadIdentityPoolNamespaceIdInput: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `workloadIdentityPoolId`<sup>Required</sup> <a name="workloadIdentityPoolId" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolId"></a>

```typescript
public readonly workloadIdentityPoolId: string;
```

- *Type:* string

---

##### `workloadIdentityPoolManagedIdentityId`<sup>Required</sup> <a name="workloadIdentityPoolManagedIdentityId" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolManagedIdentityId"></a>

```typescript
public readonly workloadIdentityPoolManagedIdentityId: string;
```

- *Type:* string

---

##### `workloadIdentityPoolNamespaceId`<sup>Required</sup> <a name="workloadIdentityPoolNamespaceId" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolNamespaceId"></a>

```typescript
public readonly workloadIdentityPoolNamespaceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentity.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IamWorkloadIdentityPoolManagedIdentityAttestationRules <a name="IamWorkloadIdentityPoolManagedIdentityAttestationRules" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRules.Initializer"></a>

```typescript
import { iamWorkloadIdentityPoolManagedIdentity } from '@cdktn/provider-google'

const iamWorkloadIdentityPoolManagedIdentityAttestationRules: iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRules.property.googleCloudResource">googleCloudResource</a></code> | <code>string</code> | A single workload operating on Google Cloud. For example: '//compute.googleapis.com/projects/123/uid/zones/us-central1-a/instances/12345678'. |

---

##### `googleCloudResource`<sup>Required</sup> <a name="googleCloudResource" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRules.property.googleCloudResource"></a>

```typescript
public readonly googleCloudResource: string;
```

- *Type:* string

A single workload operating on Google Cloud. For example: '//compute.googleapis.com/projects/123/uid/zones/us-central1-a/instances/12345678'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iam_workload_identity_pool_managed_identity#google_cloud_resource IamWorkloadIdentityPoolManagedIdentity#google_cloud_resource}

---

### IamWorkloadIdentityPoolManagedIdentityConfig <a name="IamWorkloadIdentityPoolManagedIdentityConfig" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.Initializer"></a>

```typescript
import { iamWorkloadIdentityPoolManagedIdentity } from '@cdktn/provider-google'

const iamWorkloadIdentityPoolManagedIdentityConfig: iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.workloadIdentityPoolId">workloadIdentityPoolId</a></code> | <code>string</code> | The ID to use for the pool, which becomes the final component of the resource name. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.workloadIdentityPoolManagedIdentityId">workloadIdentityPoolManagedIdentityId</a></code> | <code>string</code> | The ID to use for the managed identity. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.workloadIdentityPoolNamespaceId">workloadIdentityPoolNamespaceId</a></code> | <code>string</code> | The ID to use for the namespace. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.attestationRules">attestationRules</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRules">IamWorkloadIdentityPoolManagedIdentityAttestationRules</a>[]</code> | attestation_rules block. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.description">description</a></code> | <code>string</code> | A description of the managed identity. Cannot exceed 256 characters. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the managed identity is disabled. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iam_workload_identity_pool_managed_identity#id IamWorkloadIdentityPoolManagedIdentity#id}. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iam_workload_identity_pool_managed_identity#project IamWorkloadIdentityPoolManagedIdentity#project}. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeouts">IamWorkloadIdentityPoolManagedIdentityTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `workloadIdentityPoolId`<sup>Required</sup> <a name="workloadIdentityPoolId" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.workloadIdentityPoolId"></a>

```typescript
public readonly workloadIdentityPoolId: string;
```

- *Type:* string

The ID to use for the pool, which becomes the final component of the resource name.

This
value should be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix
'gcp-' is reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iam_workload_identity_pool_managed_identity#workload_identity_pool_id IamWorkloadIdentityPoolManagedIdentity#workload_identity_pool_id}

---

##### `workloadIdentityPoolManagedIdentityId`<sup>Required</sup> <a name="workloadIdentityPoolManagedIdentityId" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.workloadIdentityPoolManagedIdentityId"></a>

```typescript
public readonly workloadIdentityPoolManagedIdentityId: string;
```

- *Type:* string

The ID to use for the managed identity.

This value must:
* contain at most 63 characters
* contain only lowercase alphanumeric characters or '-'
* start with an alphanumeric character
* end with an alphanumeric character

The prefix 'gcp-' will be reserved for future uses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iam_workload_identity_pool_managed_identity#workload_identity_pool_managed_identity_id IamWorkloadIdentityPoolManagedIdentity#workload_identity_pool_managed_identity_id}

---

##### `workloadIdentityPoolNamespaceId`<sup>Required</sup> <a name="workloadIdentityPoolNamespaceId" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.workloadIdentityPoolNamespaceId"></a>

```typescript
public readonly workloadIdentityPoolNamespaceId: string;
```

- *Type:* string

The ID to use for the namespace.

This value must:
* contain at most 63 characters
* contain only lowercase alphanumeric characters or '-'
* start with an alphanumeric character
* end with an alphanumeric character

The prefix 'gcp-' will be reserved for future uses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iam_workload_identity_pool_managed_identity#workload_identity_pool_namespace_id IamWorkloadIdentityPoolManagedIdentity#workload_identity_pool_namespace_id}

---

##### `attestationRules`<sup>Optional</sup> <a name="attestationRules" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.attestationRules"></a>

```typescript
public readonly attestationRules: IResolvable | IamWorkloadIdentityPoolManagedIdentityAttestationRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRules">IamWorkloadIdentityPoolManagedIdentityAttestationRules</a>[]

attestation_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iam_workload_identity_pool_managed_identity#attestation_rules IamWorkloadIdentityPoolManagedIdentity#attestation_rules}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iam_workload_identity_pool_managed_identity#deletion_policy IamWorkloadIdentityPoolManagedIdentity#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the managed identity. Cannot exceed 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iam_workload_identity_pool_managed_identity#description IamWorkloadIdentityPoolManagedIdentity#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the managed identity is disabled.

If disabled, credentials may no longer be issued for
the identity, however existing credentials will still be accepted until they expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iam_workload_identity_pool_managed_identity#disabled IamWorkloadIdentityPoolManagedIdentity#disabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iam_workload_identity_pool_managed_identity#id IamWorkloadIdentityPoolManagedIdentity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iam_workload_identity_pool_managed_identity#project IamWorkloadIdentityPoolManagedIdentity#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityConfig.property.timeouts"></a>

```typescript
public readonly timeouts: IamWorkloadIdentityPoolManagedIdentityTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeouts">IamWorkloadIdentityPoolManagedIdentityTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iam_workload_identity_pool_managed_identity#timeouts IamWorkloadIdentityPoolManagedIdentity#timeouts}

---

### IamWorkloadIdentityPoolManagedIdentityTimeouts <a name="IamWorkloadIdentityPoolManagedIdentityTimeouts" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeouts.Initializer"></a>

```typescript
import { iamWorkloadIdentityPoolManagedIdentity } from '@cdktn/provider-google'

const iamWorkloadIdentityPoolManagedIdentityTimeouts: iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iam_workload_identity_pool_managed_identity#create IamWorkloadIdentityPoolManagedIdentity#create}. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iam_workload_identity_pool_managed_identity#delete IamWorkloadIdentityPoolManagedIdentity#delete}. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iam_workload_identity_pool_managed_identity#update IamWorkloadIdentityPoolManagedIdentity#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iam_workload_identity_pool_managed_identity#create IamWorkloadIdentityPoolManagedIdentity#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iam_workload_identity_pool_managed_identity#delete IamWorkloadIdentityPoolManagedIdentity#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iam_workload_identity_pool_managed_identity#update IamWorkloadIdentityPoolManagedIdentity#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IamWorkloadIdentityPoolManagedIdentityAttestationRulesList <a name="IamWorkloadIdentityPoolManagedIdentityAttestationRulesList" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.Initializer"></a>

```typescript
import { iamWorkloadIdentityPoolManagedIdentity } from '@cdktn/provider-google'

new iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.get"></a>

```typescript
public get(index: number): IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRules">IamWorkloadIdentityPoolManagedIdentityAttestationRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IamWorkloadIdentityPoolManagedIdentityAttestationRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRules">IamWorkloadIdentityPoolManagedIdentityAttestationRules</a>[]

---


### IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference <a name="IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.Initializer"></a>

```typescript
import { iamWorkloadIdentityPoolManagedIdentity } from '@cdktn/provider-google'

new iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.property.googleCloudResourceInput">googleCloudResourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.property.googleCloudResource">googleCloudResource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRules">IamWorkloadIdentityPoolManagedIdentityAttestationRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `googleCloudResourceInput`<sup>Optional</sup> <a name="googleCloudResourceInput" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.property.googleCloudResourceInput"></a>

```typescript
public readonly googleCloudResourceInput: string;
```

- *Type:* string

---

##### `googleCloudResource`<sup>Required</sup> <a name="googleCloudResource" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.property.googleCloudResource"></a>

```typescript
public readonly googleCloudResource: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IamWorkloadIdentityPoolManagedIdentityAttestationRules;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityAttestationRules">IamWorkloadIdentityPoolManagedIdentityAttestationRules</a>

---


### IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference <a name="IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.Initializer"></a>

```typescript
import { iamWorkloadIdentityPoolManagedIdentity } from '@cdktn/provider-google'

new iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeouts">IamWorkloadIdentityPoolManagedIdentityTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IamWorkloadIdentityPoolManagedIdentityTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.iamWorkloadIdentityPoolManagedIdentity.IamWorkloadIdentityPoolManagedIdentityTimeouts">IamWorkloadIdentityPoolManagedIdentityTimeouts</a>

---



