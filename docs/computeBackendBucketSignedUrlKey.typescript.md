# `computeBackendBucketSignedUrlKey` Submodule <a name="`computeBackendBucketSignedUrlKey` Submodule" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeBackendBucketSignedUrlKey <a name="ComputeBackendBucketSignedUrlKey" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_backend_bucket_signed_url_key google_compute_backend_bucket_signed_url_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer"></a>

```typescript
import { computeBackendBucketSignedUrlKey } from '@cdktn/provider-google'

new computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey(scope: Construct, id: string, config: ComputeBackendBucketSignedUrlKeyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig">ComputeBackendBucketSignedUrlKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig">ComputeBackendBucketSignedUrlKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.putTimeouts"></a>

```typescript
public putTimeouts(value: ComputeBackendBucketSignedUrlKeyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeouts">ComputeBackendBucketSignedUrlKeyTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ComputeBackendBucketSignedUrlKey resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.isConstruct"></a>

```typescript
import { computeBackendBucketSignedUrlKey } from '@cdktn/provider-google'

computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.isTerraformElement"></a>

```typescript
import { computeBackendBucketSignedUrlKey } from '@cdktn/provider-google'

computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.isTerraformResource"></a>

```typescript
import { computeBackendBucketSignedUrlKey } from '@cdktn/provider-google'

computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.generateConfigForImport"></a>

```typescript
import { computeBackendBucketSignedUrlKey } from '@cdktn/provider-google'

computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ComputeBackendBucketSignedUrlKey resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeBackendBucketSignedUrlKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeBackendBucketSignedUrlKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_backend_bucket_signed_url_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ComputeBackendBucketSignedUrlKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference">ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.backendBucketInput">backendBucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.keyValueInput">keyValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeouts">ComputeBackendBucketSignedUrlKeyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.backendBucket">backendBucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.keyValue">keyValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference">ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference</a>

---

##### `backendBucketInput`<sup>Optional</sup> <a name="backendBucketInput" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.backendBucketInput"></a>

```typescript
public readonly backendBucketInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyValueInput`<sup>Optional</sup> <a name="keyValueInput" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.keyValueInput"></a>

```typescript
public readonly keyValueInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ComputeBackendBucketSignedUrlKeyTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeouts">ComputeBackendBucketSignedUrlKeyTimeouts</a>

---

##### `backendBucket`<sup>Required</sup> <a name="backendBucket" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.backendBucket"></a>

```typescript
public readonly backendBucket: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keyValue`<sup>Required</sup> <a name="keyValue" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.keyValue"></a>

```typescript
public readonly keyValue: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeBackendBucketSignedUrlKeyConfig <a name="ComputeBackendBucketSignedUrlKeyConfig" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.Initializer"></a>

```typescript
import { computeBackendBucketSignedUrlKey } from '@cdktn/provider-google'

const computeBackendBucketSignedUrlKeyConfig: computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.backendBucket">backendBucket</a></code> | <code>string</code> | The backend bucket this signed URL key belongs. |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.keyValue">keyValue</a></code> | <code>string</code> | 128-bit key value used for signing the URL. |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.name">name</a></code> | <code>string</code> | Name of the signed URL key. |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_backend_bucket_signed_url_key#id ComputeBackendBucketSignedUrlKey#id}. |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_backend_bucket_signed_url_key#project ComputeBackendBucketSignedUrlKey#project}. |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeouts">ComputeBackendBucketSignedUrlKeyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `backendBucket`<sup>Required</sup> <a name="backendBucket" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.backendBucket"></a>

```typescript
public readonly backendBucket: string;
```

- *Type:* string

The backend bucket this signed URL key belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_backend_bucket_signed_url_key#backend_bucket ComputeBackendBucketSignedUrlKey#backend_bucket}

---

##### `keyValue`<sup>Required</sup> <a name="keyValue" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.keyValue"></a>

```typescript
public readonly keyValue: string;
```

- *Type:* string

128-bit key value used for signing the URL.

The key value must be a
valid RFC 4648 Section 5 base64url encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_backend_bucket_signed_url_key#key_value ComputeBackendBucketSignedUrlKey#key_value}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the signed URL key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_backend_bucket_signed_url_key#name ComputeBackendBucketSignedUrlKey#name}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_backend_bucket_signed_url_key#deletion_policy ComputeBackendBucketSignedUrlKey#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_backend_bucket_signed_url_key#id ComputeBackendBucketSignedUrlKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_backend_bucket_signed_url_key#project ComputeBackendBucketSignedUrlKey#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeBackendBucketSignedUrlKeyTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeouts">ComputeBackendBucketSignedUrlKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_backend_bucket_signed_url_key#timeouts ComputeBackendBucketSignedUrlKey#timeouts}

---

### ComputeBackendBucketSignedUrlKeyTimeouts <a name="ComputeBackendBucketSignedUrlKeyTimeouts" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeouts.Initializer"></a>

```typescript
import { computeBackendBucketSignedUrlKey } from '@cdktn/provider-google'

const computeBackendBucketSignedUrlKeyTimeouts: computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_backend_bucket_signed_url_key#create ComputeBackendBucketSignedUrlKey#create}. |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_backend_bucket_signed_url_key#delete ComputeBackendBucketSignedUrlKey#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_backend_bucket_signed_url_key#create ComputeBackendBucketSignedUrlKey#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_backend_bucket_signed_url_key#delete ComputeBackendBucketSignedUrlKey#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference <a name="ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.Initializer"></a>

```typescript
import { computeBackendBucketSignedUrlKey } from '@cdktn/provider-google'

new computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeouts">ComputeBackendBucketSignedUrlKeyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeBackendBucketSignedUrlKeyTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeouts">ComputeBackendBucketSignedUrlKeyTimeouts</a>

---



