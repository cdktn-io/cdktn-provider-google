# `firestoreIndex` Submodule <a name="`firestoreIndex` Submodule" id="@cdktn/provider-google.firestoreIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FirestoreIndex <a name="FirestoreIndex" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index google_firestore_index}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.Initializer"></a>

```typescript
import { firestoreIndex } from '@cdktn/provider-google'

new firestoreIndex.FirestoreIndex(scope: Construct, id: string, config: FirestoreIndexConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig">FirestoreIndexConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig">FirestoreIndexConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.putFields">putFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.resetApiScope">resetApiScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.resetDensity">resetDensity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.resetMultikey">resetMultikey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.resetQueryScope">resetQueryScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.resetSkipWait">resetSkipWait</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.resetUnique">resetUnique</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFields` <a name="putFields" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.putFields"></a>

```typescript
public putFields(value: IResolvable | FirestoreIndexFields[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.putFields.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFields">FirestoreIndexFields</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.putTimeouts"></a>

```typescript
public putTimeouts(value: FirestoreIndexTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeouts">FirestoreIndexTimeouts</a>

---

##### `resetApiScope` <a name="resetApiScope" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.resetApiScope"></a>

```typescript
public resetApiScope(): void
```

##### `resetDatabase` <a name="resetDatabase" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.resetDatabase"></a>

```typescript
public resetDatabase(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDensity` <a name="resetDensity" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.resetDensity"></a>

```typescript
public resetDensity(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMultikey` <a name="resetMultikey" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.resetMultikey"></a>

```typescript
public resetMultikey(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetQueryScope` <a name="resetQueryScope" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.resetQueryScope"></a>

```typescript
public resetQueryScope(): void
```

##### `resetSkipWait` <a name="resetSkipWait" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.resetSkipWait"></a>

```typescript
public resetSkipWait(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUnique` <a name="resetUnique" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.resetUnique"></a>

```typescript
public resetUnique(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a FirestoreIndex resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.isConstruct"></a>

```typescript
import { firestoreIndex } from '@cdktn/provider-google'

firestoreIndex.FirestoreIndex.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.isTerraformElement"></a>

```typescript
import { firestoreIndex } from '@cdktn/provider-google'

firestoreIndex.FirestoreIndex.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.isTerraformResource"></a>

```typescript
import { firestoreIndex } from '@cdktn/provider-google'

firestoreIndex.FirestoreIndex.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.generateConfigForImport"></a>

```typescript
import { firestoreIndex } from '@cdktn/provider-google'

firestoreIndex.FirestoreIndex.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a FirestoreIndex resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FirestoreIndex to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FirestoreIndex that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the FirestoreIndex to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsList">FirestoreIndexFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference">FirestoreIndexTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.apiScopeInput">apiScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.collectionInput">collectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.densityInput">densityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.fieldsInput">fieldsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFields">FirestoreIndexFields</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.multikeyInput">multikeyInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.queryScopeInput">queryScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.skipWaitInput">skipWaitInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeouts">FirestoreIndexTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.uniqueInput">uniqueInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.apiScope">apiScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.collection">collection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.density">density</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.multikey">multikey</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.queryScope">queryScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.skipWait">skipWait</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.unique">unique</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.fields"></a>

```typescript
public readonly fields: FirestoreIndexFieldsList;
```

- *Type:* <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsList">FirestoreIndexFieldsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.timeouts"></a>

```typescript
public readonly timeouts: FirestoreIndexTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference">FirestoreIndexTimeoutsOutputReference</a>

---

##### `apiScopeInput`<sup>Optional</sup> <a name="apiScopeInput" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.apiScopeInput"></a>

```typescript
public readonly apiScopeInput: string;
```

- *Type:* string

---

##### `collectionInput`<sup>Optional</sup> <a name="collectionInput" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.collectionInput"></a>

```typescript
public readonly collectionInput: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `densityInput`<sup>Optional</sup> <a name="densityInput" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.densityInput"></a>

```typescript
public readonly densityInput: string;
```

- *Type:* string

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.fieldsInput"></a>

```typescript
public readonly fieldsInput: IResolvable | FirestoreIndexFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFields">FirestoreIndexFields</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `multikeyInput`<sup>Optional</sup> <a name="multikeyInput" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.multikeyInput"></a>

```typescript
public readonly multikeyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `queryScopeInput`<sup>Optional</sup> <a name="queryScopeInput" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.queryScopeInput"></a>

```typescript
public readonly queryScopeInput: string;
```

- *Type:* string

---

##### `skipWaitInput`<sup>Optional</sup> <a name="skipWaitInput" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.skipWaitInput"></a>

```typescript
public readonly skipWaitInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | FirestoreIndexTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeouts">FirestoreIndexTimeouts</a>

---

##### `uniqueInput`<sup>Optional</sup> <a name="uniqueInput" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.uniqueInput"></a>

```typescript
public readonly uniqueInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `apiScope`<sup>Required</sup> <a name="apiScope" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.apiScope"></a>

```typescript
public readonly apiScope: string;
```

- *Type:* string

---

##### `collection`<sup>Required</sup> <a name="collection" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.collection"></a>

```typescript
public readonly collection: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `density`<sup>Required</sup> <a name="density" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.density"></a>

```typescript
public readonly density: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `multikey`<sup>Required</sup> <a name="multikey" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.multikey"></a>

```typescript
public readonly multikey: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `queryScope`<sup>Required</sup> <a name="queryScope" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.queryScope"></a>

```typescript
public readonly queryScope: string;
```

- *Type:* string

---

##### `skipWait`<sup>Required</sup> <a name="skipWait" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.skipWait"></a>

```typescript
public readonly skipWait: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `unique`<sup>Required</sup> <a name="unique" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.unique"></a>

```typescript
public readonly unique: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.firestoreIndex.FirestoreIndex.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FirestoreIndexConfig <a name="FirestoreIndexConfig" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.Initializer"></a>

```typescript
import { firestoreIndex } from '@cdktn/provider-google'

const firestoreIndexConfig: firestoreIndex.FirestoreIndexConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.collection">collection</a></code> | <code>string</code> | The collection being indexed. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.fields">fields</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFields">FirestoreIndexFields</a>[]</code> | fields block. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.apiScope">apiScope</a></code> | <code>string</code> | The API scope at which a query is run. Default value: "ANY_API" Possible values: ["ANY_API", "DATASTORE_MODE_API", "MONGODB_COMPATIBLE_API"]. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.database">database</a></code> | <code>string</code> | The Firestore database id. Defaults to '"(default)"'. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.density">density</a></code> | <code>string</code> | The density configuration for this index. Possible values: ["SPARSE_ALL", "SPARSE_ANY", "DENSE"]. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index#id FirestoreIndex#id}. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.multikey">multikey</a></code> | <code>boolean \| cdktn.IResolvable</code> | Optional. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index#project FirestoreIndex#project}. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.queryScope">queryScope</a></code> | <code>string</code> | The scope at which a query is run. Default value: "COLLECTION" Possible values: ["COLLECTION", "COLLECTION_GROUP", "COLLECTION_RECURSIVE"]. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.skipWait">skipWait</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to skip waiting for the index to be created. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeouts">FirestoreIndexTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.unique">unique</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether it is an unique index. Unique index ensures all values for the indexed field(s) are unique across documents. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `collection`<sup>Required</sup> <a name="collection" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.collection"></a>

```typescript
public readonly collection: string;
```

- *Type:* string

The collection being indexed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index#collection FirestoreIndex#collection}

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.fields"></a>

```typescript
public readonly fields: IResolvable | FirestoreIndexFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFields">FirestoreIndexFields</a>[]

fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index#fields FirestoreIndex#fields}

---

##### `apiScope`<sup>Optional</sup> <a name="apiScope" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.apiScope"></a>

```typescript
public readonly apiScope: string;
```

- *Type:* string

The API scope at which a query is run. Default value: "ANY_API" Possible values: ["ANY_API", "DATASTORE_MODE_API", "MONGODB_COMPATIBLE_API"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index#api_scope FirestoreIndex#api_scope}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

The Firestore database id. Defaults to '"(default)"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index#database FirestoreIndex#database}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index#deletion_policy FirestoreIndex#deletion_policy}

---

##### `density`<sup>Optional</sup> <a name="density" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.density"></a>

```typescript
public readonly density: string;
```

- *Type:* string

The density configuration for this index. Possible values: ["SPARSE_ALL", "SPARSE_ANY", "DENSE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index#density FirestoreIndex#density}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index#id FirestoreIndex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `multikey`<sup>Optional</sup> <a name="multikey" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.multikey"></a>

```typescript
public readonly multikey: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Optional.

Whether the index is multikey. By default, the index is not multikey. For non-multikey indexes, none of the paths in the index definition reach or traverse an array, except via an explicit array index. For multikey indexes, at most one of the paths in the index definition reach or traverse an array, except via an explicit array index. Violations will result in errors. Note this field only applies to indexes with MONGODB_COMPATIBLE_API ApiScope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index#multikey FirestoreIndex#multikey}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index#project FirestoreIndex#project}.

---

##### `queryScope`<sup>Optional</sup> <a name="queryScope" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.queryScope"></a>

```typescript
public readonly queryScope: string;
```

- *Type:* string

The scope at which a query is run. Default value: "COLLECTION" Possible values: ["COLLECTION", "COLLECTION_GROUP", "COLLECTION_RECURSIVE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index#query_scope FirestoreIndex#query_scope}

---

##### `skipWait`<sup>Optional</sup> <a name="skipWait" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.skipWait"></a>

```typescript
public readonly skipWait: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to skip waiting for the index to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index#skip_wait FirestoreIndex#skip_wait}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.timeouts"></a>

```typescript
public readonly timeouts: FirestoreIndexTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeouts">FirestoreIndexTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index#timeouts FirestoreIndex#timeouts}

---

##### `unique`<sup>Optional</sup> <a name="unique" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexConfig.property.unique"></a>

```typescript
public readonly unique: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether it is an unique index. Unique index ensures all values for the indexed field(s) are unique across documents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index#unique FirestoreIndex#unique}

---

### FirestoreIndexFields <a name="FirestoreIndexFields" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFields.Initializer"></a>

```typescript
import { firestoreIndex } from '@cdktn/provider-google'

const firestoreIndexFields: firestoreIndex.FirestoreIndexFields = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFields.property.arrayConfig">arrayConfig</a></code> | <code>string</code> | Indicates that this field supports operations on arrayValues. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFields.property.fieldPath">fieldPath</a></code> | <code>string</code> | Name of the field. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFields.property.order">order</a></code> | <code>string</code> | Indicates that this field supports ordering by the specified order or comparing using =, <, <=, >, >=. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFields.property.searchConfig">searchConfig</a></code> | <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfig">FirestoreIndexFieldsSearchConfig</a></code> | search_config block. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFields.property.vectorConfig">vectorConfig</a></code> | <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfig">FirestoreIndexFieldsVectorConfig</a></code> | vector_config block. |

---

##### `arrayConfig`<sup>Optional</sup> <a name="arrayConfig" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFields.property.arrayConfig"></a>

```typescript
public readonly arrayConfig: string;
```

- *Type:* string

Indicates that this field supports operations on arrayValues.

Only one of 'order', 'arrayConfig', 'searchConfig' and
'vectorConfig' can be specified. Possible values: ["CONTAINS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index#array_config FirestoreIndex#array_config}

---

##### `fieldPath`<sup>Optional</sup> <a name="fieldPath" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFields.property.fieldPath"></a>

```typescript
public readonly fieldPath: string;
```

- *Type:* string

Name of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index#field_path FirestoreIndex#field_path}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFields.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

Indicates that this field supports ordering by the specified order or comparing using =, <, <=, >, >=.

Only one of 'order', 'arrayConfig', 'searchConfig' and 'vectorConfig' can be specified. Possible values: ["ASCENDING", "DESCENDING"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index#order FirestoreIndex#order}

---

##### `searchConfig`<sup>Optional</sup> <a name="searchConfig" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFields.property.searchConfig"></a>

```typescript
public readonly searchConfig: FirestoreIndexFieldsSearchConfig;
```

- *Type:* <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfig">FirestoreIndexFieldsSearchConfig</a>

search_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index#search_config FirestoreIndex#search_config}

---

##### `vectorConfig`<sup>Optional</sup> <a name="vectorConfig" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFields.property.vectorConfig"></a>

```typescript
public readonly vectorConfig: FirestoreIndexFieldsVectorConfig;
```

- *Type:* <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfig">FirestoreIndexFieldsVectorConfig</a>

vector_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index#vector_config FirestoreIndex#vector_config}

---

### FirestoreIndexFieldsSearchConfig <a name="FirestoreIndexFieldsSearchConfig" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfig.Initializer"></a>

```typescript
import { firestoreIndex } from '@cdktn/provider-google'

const firestoreIndexFieldsSearchConfig: firestoreIndex.FirestoreIndexFieldsSearchConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfig.property.geoSpec">geoSpec</a></code> | <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpec">FirestoreIndexFieldsSearchConfigGeoSpec</a></code> | geo_spec block. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfig.property.textSpec">textSpec</a></code> | <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpec">FirestoreIndexFieldsSearchConfigTextSpec</a></code> | text_spec block. |

---

##### `geoSpec`<sup>Optional</sup> <a name="geoSpec" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfig.property.geoSpec"></a>

```typescript
public readonly geoSpec: FirestoreIndexFieldsSearchConfigGeoSpec;
```

- *Type:* <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpec">FirestoreIndexFieldsSearchConfigGeoSpec</a>

geo_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index#geo_spec FirestoreIndex#geo_spec}

---

##### `textSpec`<sup>Optional</sup> <a name="textSpec" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfig.property.textSpec"></a>

```typescript
public readonly textSpec: FirestoreIndexFieldsSearchConfigTextSpec;
```

- *Type:* <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpec">FirestoreIndexFieldsSearchConfigTextSpec</a>

text_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index#text_spec FirestoreIndex#text_spec}

---

### FirestoreIndexFieldsSearchConfigGeoSpec <a name="FirestoreIndexFieldsSearchConfigGeoSpec" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpec.Initializer"></a>

```typescript
import { firestoreIndex } from '@cdktn/provider-google'

const firestoreIndexFieldsSearchConfigGeoSpec: firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpec.property.geoJsonIndexingDisabled">geoJsonIndexingDisabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, disables GeoJSON indexing for the field. |

---

##### `geoJsonIndexingDisabled`<sup>Required</sup> <a name="geoJsonIndexingDisabled" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpec.property.geoJsonIndexingDisabled"></a>

```typescript
public readonly geoJsonIndexingDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, disables GeoJSON indexing for the field.

By default, GeoJSON points are indexed.
Firestore GeoPoints are indexed regardless of the value of this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index#geo_json_indexing_disabled FirestoreIndex#geo_json_indexing_disabled}

---

### FirestoreIndexFieldsSearchConfigTextSpec <a name="FirestoreIndexFieldsSearchConfigTextSpec" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpec.Initializer"></a>

```typescript
import { firestoreIndex } from '@cdktn/provider-google'

const firestoreIndexFieldsSearchConfigTextSpec: firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpec.property.indexSpecs">indexSpecs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecs">FirestoreIndexFieldsSearchConfigTextSpecIndexSpecs</a>[]</code> | index_specs block. |

---

##### `indexSpecs`<sup>Required</sup> <a name="indexSpecs" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpec.property.indexSpecs"></a>

```typescript
public readonly indexSpecs: IResolvable | FirestoreIndexFieldsSearchConfigTextSpecIndexSpecs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecs">FirestoreIndexFieldsSearchConfigTextSpecIndexSpecs</a>[]

index_specs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index#index_specs FirestoreIndex#index_specs}

---

### FirestoreIndexFieldsSearchConfigTextSpecIndexSpecs <a name="FirestoreIndexFieldsSearchConfigTextSpecIndexSpecs" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecs.Initializer"></a>

```typescript
import { firestoreIndex } from '@cdktn/provider-google'

const firestoreIndexFieldsSearchConfigTextSpecIndexSpecs: firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecs.property.indexType">indexType</a></code> | <code>string</code> | Ways to index the text field value. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecs.property.matchType">matchType</a></code> | <code>string</code> | How to match the text field value. |

---

##### `indexType`<sup>Optional</sup> <a name="indexType" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecs.property.indexType"></a>

```typescript
public readonly indexType: string;
```

- *Type:* string

Ways to index the text field value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index#index_type FirestoreIndex#index_type}

---

##### `matchType`<sup>Optional</sup> <a name="matchType" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecs.property.matchType"></a>

```typescript
public readonly matchType: string;
```

- *Type:* string

How to match the text field value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index#match_type FirestoreIndex#match_type}

---

### FirestoreIndexFieldsVectorConfig <a name="FirestoreIndexFieldsVectorConfig" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfig.Initializer"></a>

```typescript
import { firestoreIndex } from '@cdktn/provider-google'

const firestoreIndexFieldsVectorConfig: firestoreIndex.FirestoreIndexFieldsVectorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfig.property.dimension">dimension</a></code> | <code>number</code> | The resulting index will only include vectors of this dimension, and can be used for vector search with the same dimension. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfig.property.flat">flat</a></code> | <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlat">FirestoreIndexFieldsVectorConfigFlat</a></code> | flat block. |

---

##### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfig.property.dimension"></a>

```typescript
public readonly dimension: number;
```

- *Type:* number

The resulting index will only include vectors of this dimension, and can be used for vector search with the same dimension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index#dimension FirestoreIndex#dimension}

---

##### `flat`<sup>Optional</sup> <a name="flat" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfig.property.flat"></a>

```typescript
public readonly flat: FirestoreIndexFieldsVectorConfigFlat;
```

- *Type:* <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlat">FirestoreIndexFieldsVectorConfigFlat</a>

flat block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index#flat FirestoreIndex#flat}

---

### FirestoreIndexFieldsVectorConfigFlat <a name="FirestoreIndexFieldsVectorConfigFlat" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlat.Initializer"></a>

```typescript
import { firestoreIndex } from '@cdktn/provider-google'

const firestoreIndexFieldsVectorConfigFlat: firestoreIndex.FirestoreIndexFieldsVectorConfigFlat = { ... }
```


### FirestoreIndexTimeouts <a name="FirestoreIndexTimeouts" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeouts.Initializer"></a>

```typescript
import { firestoreIndex } from '@cdktn/provider-google'

const firestoreIndexTimeouts: firestoreIndex.FirestoreIndexTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index#create FirestoreIndex#create}. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index#delete FirestoreIndex#delete}. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index#update FirestoreIndex#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index#create FirestoreIndex#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index#delete FirestoreIndex#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firestore_index#update FirestoreIndex#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FirestoreIndexFieldsList <a name="FirestoreIndexFieldsList" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsList.Initializer"></a>

```typescript
import { firestoreIndex } from '@cdktn/provider-google'

new firestoreIndex.FirestoreIndexFieldsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsList.get"></a>

```typescript
public get(index: number): FirestoreIndexFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFields">FirestoreIndexFields</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FirestoreIndexFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFields">FirestoreIndexFields</a>[]

---


### FirestoreIndexFieldsOutputReference <a name="FirestoreIndexFieldsOutputReference" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.Initializer"></a>

```typescript
import { firestoreIndex } from '@cdktn/provider-google'

new firestoreIndex.FirestoreIndexFieldsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.putSearchConfig">putSearchConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.putVectorConfig">putVectorConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.resetArrayConfig">resetArrayConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.resetFieldPath">resetFieldPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.resetOrder">resetOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.resetSearchConfig">resetSearchConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.resetVectorConfig">resetVectorConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSearchConfig` <a name="putSearchConfig" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.putSearchConfig"></a>

```typescript
public putSearchConfig(value: FirestoreIndexFieldsSearchConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.putSearchConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfig">FirestoreIndexFieldsSearchConfig</a>

---

##### `putVectorConfig` <a name="putVectorConfig" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.putVectorConfig"></a>

```typescript
public putVectorConfig(value: FirestoreIndexFieldsVectorConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.putVectorConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfig">FirestoreIndexFieldsVectorConfig</a>

---

##### `resetArrayConfig` <a name="resetArrayConfig" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.resetArrayConfig"></a>

```typescript
public resetArrayConfig(): void
```

##### `resetFieldPath` <a name="resetFieldPath" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.resetFieldPath"></a>

```typescript
public resetFieldPath(): void
```

##### `resetOrder` <a name="resetOrder" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.resetOrder"></a>

```typescript
public resetOrder(): void
```

##### `resetSearchConfig` <a name="resetSearchConfig" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.resetSearchConfig"></a>

```typescript
public resetSearchConfig(): void
```

##### `resetVectorConfig` <a name="resetVectorConfig" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.resetVectorConfig"></a>

```typescript
public resetVectorConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.searchConfig">searchConfig</a></code> | <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference">FirestoreIndexFieldsSearchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.vectorConfig">vectorConfig</a></code> | <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference">FirestoreIndexFieldsVectorConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.arrayConfigInput">arrayConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.fieldPathInput">fieldPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.orderInput">orderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.searchConfigInput">searchConfigInput</a></code> | <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfig">FirestoreIndexFieldsSearchConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.vectorConfigInput">vectorConfigInput</a></code> | <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfig">FirestoreIndexFieldsVectorConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.arrayConfig">arrayConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.fieldPath">fieldPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.order">order</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFields">FirestoreIndexFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `searchConfig`<sup>Required</sup> <a name="searchConfig" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.searchConfig"></a>

```typescript
public readonly searchConfig: FirestoreIndexFieldsSearchConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference">FirestoreIndexFieldsSearchConfigOutputReference</a>

---

##### `vectorConfig`<sup>Required</sup> <a name="vectorConfig" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.vectorConfig"></a>

```typescript
public readonly vectorConfig: FirestoreIndexFieldsVectorConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference">FirestoreIndexFieldsVectorConfigOutputReference</a>

---

##### `arrayConfigInput`<sup>Optional</sup> <a name="arrayConfigInput" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.arrayConfigInput"></a>

```typescript
public readonly arrayConfigInput: string;
```

- *Type:* string

---

##### `fieldPathInput`<sup>Optional</sup> <a name="fieldPathInput" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.fieldPathInput"></a>

```typescript
public readonly fieldPathInput: string;
```

- *Type:* string

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.orderInput"></a>

```typescript
public readonly orderInput: string;
```

- *Type:* string

---

##### `searchConfigInput`<sup>Optional</sup> <a name="searchConfigInput" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.searchConfigInput"></a>

```typescript
public readonly searchConfigInput: FirestoreIndexFieldsSearchConfig;
```

- *Type:* <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfig">FirestoreIndexFieldsSearchConfig</a>

---

##### `vectorConfigInput`<sup>Optional</sup> <a name="vectorConfigInput" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.vectorConfigInput"></a>

```typescript
public readonly vectorConfigInput: FirestoreIndexFieldsVectorConfig;
```

- *Type:* <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfig">FirestoreIndexFieldsVectorConfig</a>

---

##### `arrayConfig`<sup>Required</sup> <a name="arrayConfig" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.arrayConfig"></a>

```typescript
public readonly arrayConfig: string;
```

- *Type:* string

---

##### `fieldPath`<sup>Required</sup> <a name="fieldPath" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.fieldPath"></a>

```typescript
public readonly fieldPath: string;
```

- *Type:* string

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FirestoreIndexFields;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFields">FirestoreIndexFields</a>

---


### FirestoreIndexFieldsSearchConfigGeoSpecOutputReference <a name="FirestoreIndexFieldsSearchConfigGeoSpecOutputReference" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.Initializer"></a>

```typescript
import { firestoreIndex } from '@cdktn/provider-google'

new firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.property.geoJsonIndexingDisabledInput">geoJsonIndexingDisabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.property.geoJsonIndexingDisabled">geoJsonIndexingDisabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpec">FirestoreIndexFieldsSearchConfigGeoSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `geoJsonIndexingDisabledInput`<sup>Optional</sup> <a name="geoJsonIndexingDisabledInput" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.property.geoJsonIndexingDisabledInput"></a>

```typescript
public readonly geoJsonIndexingDisabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `geoJsonIndexingDisabled`<sup>Required</sup> <a name="geoJsonIndexingDisabled" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.property.geoJsonIndexingDisabled"></a>

```typescript
public readonly geoJsonIndexingDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FirestoreIndexFieldsSearchConfigGeoSpec;
```

- *Type:* <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpec">FirestoreIndexFieldsSearchConfigGeoSpec</a>

---


### FirestoreIndexFieldsSearchConfigOutputReference <a name="FirestoreIndexFieldsSearchConfigOutputReference" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.Initializer"></a>

```typescript
import { firestoreIndex } from '@cdktn/provider-google'

new firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.putGeoSpec">putGeoSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.putTextSpec">putTextSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.resetGeoSpec">resetGeoSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.resetTextSpec">resetTextSpec</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGeoSpec` <a name="putGeoSpec" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.putGeoSpec"></a>

```typescript
public putGeoSpec(value: FirestoreIndexFieldsSearchConfigGeoSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.putGeoSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpec">FirestoreIndexFieldsSearchConfigGeoSpec</a>

---

##### `putTextSpec` <a name="putTextSpec" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.putTextSpec"></a>

```typescript
public putTextSpec(value: FirestoreIndexFieldsSearchConfigTextSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.putTextSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpec">FirestoreIndexFieldsSearchConfigTextSpec</a>

---

##### `resetGeoSpec` <a name="resetGeoSpec" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.resetGeoSpec"></a>

```typescript
public resetGeoSpec(): void
```

##### `resetTextSpec` <a name="resetTextSpec" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.resetTextSpec"></a>

```typescript
public resetTextSpec(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.property.geoSpec">geoSpec</a></code> | <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference">FirestoreIndexFieldsSearchConfigGeoSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.property.textSpec">textSpec</a></code> | <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference">FirestoreIndexFieldsSearchConfigTextSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.property.geoSpecInput">geoSpecInput</a></code> | <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpec">FirestoreIndexFieldsSearchConfigGeoSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.property.textSpecInput">textSpecInput</a></code> | <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpec">FirestoreIndexFieldsSearchConfigTextSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfig">FirestoreIndexFieldsSearchConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `geoSpec`<sup>Required</sup> <a name="geoSpec" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.property.geoSpec"></a>

```typescript
public readonly geoSpec: FirestoreIndexFieldsSearchConfigGeoSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpecOutputReference">FirestoreIndexFieldsSearchConfigGeoSpecOutputReference</a>

---

##### `textSpec`<sup>Required</sup> <a name="textSpec" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.property.textSpec"></a>

```typescript
public readonly textSpec: FirestoreIndexFieldsSearchConfigTextSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference">FirestoreIndexFieldsSearchConfigTextSpecOutputReference</a>

---

##### `geoSpecInput`<sup>Optional</sup> <a name="geoSpecInput" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.property.geoSpecInput"></a>

```typescript
public readonly geoSpecInput: FirestoreIndexFieldsSearchConfigGeoSpec;
```

- *Type:* <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigGeoSpec">FirestoreIndexFieldsSearchConfigGeoSpec</a>

---

##### `textSpecInput`<sup>Optional</sup> <a name="textSpecInput" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.property.textSpecInput"></a>

```typescript
public readonly textSpecInput: FirestoreIndexFieldsSearchConfigTextSpec;
```

- *Type:* <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpec">FirestoreIndexFieldsSearchConfigTextSpec</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FirestoreIndexFieldsSearchConfig;
```

- *Type:* <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfig">FirestoreIndexFieldsSearchConfig</a>

---


### FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList <a name="FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.Initializer"></a>

```typescript
import { firestoreIndex } from '@cdktn/provider-google'

new firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.get"></a>

```typescript
public get(index: number): FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecs">FirestoreIndexFieldsSearchConfigTextSpecIndexSpecs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FirestoreIndexFieldsSearchConfigTextSpecIndexSpecs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecs">FirestoreIndexFieldsSearchConfigTextSpecIndexSpecs</a>[]

---


### FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference <a name="FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.Initializer"></a>

```typescript
import { firestoreIndex } from '@cdktn/provider-google'

new firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.resetIndexType">resetIndexType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.resetMatchType">resetMatchType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIndexType` <a name="resetIndexType" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.resetIndexType"></a>

```typescript
public resetIndexType(): void
```

##### `resetMatchType` <a name="resetMatchType" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.resetMatchType"></a>

```typescript
public resetMatchType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.property.indexTypeInput">indexTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.property.matchTypeInput">matchTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.property.indexType">indexType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.property.matchType">matchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecs">FirestoreIndexFieldsSearchConfigTextSpecIndexSpecs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `indexTypeInput`<sup>Optional</sup> <a name="indexTypeInput" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.property.indexTypeInput"></a>

```typescript
public readonly indexTypeInput: string;
```

- *Type:* string

---

##### `matchTypeInput`<sup>Optional</sup> <a name="matchTypeInput" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.property.matchTypeInput"></a>

```typescript
public readonly matchTypeInput: string;
```

- *Type:* string

---

##### `indexType`<sup>Required</sup> <a name="indexType" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.property.indexType"></a>

```typescript
public readonly indexType: string;
```

- *Type:* string

---

##### `matchType`<sup>Required</sup> <a name="matchType" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.property.matchType"></a>

```typescript
public readonly matchType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FirestoreIndexFieldsSearchConfigTextSpecIndexSpecs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecs">FirestoreIndexFieldsSearchConfigTextSpecIndexSpecs</a>

---


### FirestoreIndexFieldsSearchConfigTextSpecOutputReference <a name="FirestoreIndexFieldsSearchConfigTextSpecOutputReference" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.Initializer"></a>

```typescript
import { firestoreIndex } from '@cdktn/provider-google'

new firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.putIndexSpecs">putIndexSpecs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIndexSpecs` <a name="putIndexSpecs" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.putIndexSpecs"></a>

```typescript
public putIndexSpecs(value: IResolvable | FirestoreIndexFieldsSearchConfigTextSpecIndexSpecs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.putIndexSpecs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecs">FirestoreIndexFieldsSearchConfigTextSpecIndexSpecs</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.property.indexSpecs">indexSpecs</a></code> | <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList">FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.property.indexSpecsInput">indexSpecsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecs">FirestoreIndexFieldsSearchConfigTextSpecIndexSpecs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpec">FirestoreIndexFieldsSearchConfigTextSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `indexSpecs`<sup>Required</sup> <a name="indexSpecs" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.property.indexSpecs"></a>

```typescript
public readonly indexSpecs: FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList;
```

- *Type:* <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList">FirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList</a>

---

##### `indexSpecsInput`<sup>Optional</sup> <a name="indexSpecsInput" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.property.indexSpecsInput"></a>

```typescript
public readonly indexSpecsInput: IResolvable | FirestoreIndexFieldsSearchConfigTextSpecIndexSpecs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecIndexSpecs">FirestoreIndexFieldsSearchConfigTextSpecIndexSpecs</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FirestoreIndexFieldsSearchConfigTextSpec;
```

- *Type:* <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsSearchConfigTextSpec">FirestoreIndexFieldsSearchConfigTextSpec</a>

---


### FirestoreIndexFieldsVectorConfigFlatOutputReference <a name="FirestoreIndexFieldsVectorConfigFlatOutputReference" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.Initializer"></a>

```typescript
import { firestoreIndex } from '@cdktn/provider-google'

new firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlat">FirestoreIndexFieldsVectorConfigFlat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FirestoreIndexFieldsVectorConfigFlat;
```

- *Type:* <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlat">FirestoreIndexFieldsVectorConfigFlat</a>

---


### FirestoreIndexFieldsVectorConfigOutputReference <a name="FirestoreIndexFieldsVectorConfigOutputReference" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.Initializer"></a>

```typescript
import { firestoreIndex } from '@cdktn/provider-google'

new firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.putFlat">putFlat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.resetDimension">resetDimension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.resetFlat">resetFlat</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFlat` <a name="putFlat" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.putFlat"></a>

```typescript
public putFlat(value: FirestoreIndexFieldsVectorConfigFlat): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.putFlat.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlat">FirestoreIndexFieldsVectorConfigFlat</a>

---

##### `resetDimension` <a name="resetDimension" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.resetDimension"></a>

```typescript
public resetDimension(): void
```

##### `resetFlat` <a name="resetFlat" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.resetFlat"></a>

```typescript
public resetFlat(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.property.flat">flat</a></code> | <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference">FirestoreIndexFieldsVectorConfigFlatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.property.dimensionInput">dimensionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.property.flatInput">flatInput</a></code> | <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlat">FirestoreIndexFieldsVectorConfigFlat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.property.dimension">dimension</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfig">FirestoreIndexFieldsVectorConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `flat`<sup>Required</sup> <a name="flat" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.property.flat"></a>

```typescript
public readonly flat: FirestoreIndexFieldsVectorConfigFlatOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference">FirestoreIndexFieldsVectorConfigFlatOutputReference</a>

---

##### `dimensionInput`<sup>Optional</sup> <a name="dimensionInput" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.property.dimensionInput"></a>

```typescript
public readonly dimensionInput: number;
```

- *Type:* number

---

##### `flatInput`<sup>Optional</sup> <a name="flatInput" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.property.flatInput"></a>

```typescript
public readonly flatInput: FirestoreIndexFieldsVectorConfigFlat;
```

- *Type:* <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlat">FirestoreIndexFieldsVectorConfigFlat</a>

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.property.dimension"></a>

```typescript
public readonly dimension: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FirestoreIndexFieldsVectorConfig;
```

- *Type:* <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfig">FirestoreIndexFieldsVectorConfig</a>

---


### FirestoreIndexTimeoutsOutputReference <a name="FirestoreIndexTimeoutsOutputReference" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.Initializer"></a>

```typescript
import { firestoreIndex } from '@cdktn/provider-google'

new firestoreIndex.FirestoreIndexTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeouts">FirestoreIndexTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FirestoreIndexTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.firestoreIndex.FirestoreIndexTimeouts">FirestoreIndexTimeouts</a>

---



