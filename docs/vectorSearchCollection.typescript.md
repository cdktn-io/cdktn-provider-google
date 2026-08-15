# `vectorSearchCollection` Submodule <a name="`vectorSearchCollection` Submodule" id="@cdktn/provider-google.vectorSearchCollection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VectorSearchCollection <a name="VectorSearchCollection" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vector_search_collection google_vector_search_collection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer"></a>

```typescript
import { vectorSearchCollection } from '@cdktn/provider-google'

new vectorSearchCollection.VectorSearchCollection(scope: Construct, id: string, config: VectorSearchCollectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig">VectorSearchCollectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig">VectorSearchCollectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.putEncryptionSpec">putEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.putVectorSchema">putVectorSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetDataSchema">resetDataSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetEncryptionSpec">resetEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetVectorSchema">resetVectorSchema</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEncryptionSpec` <a name="putEncryptionSpec" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.putEncryptionSpec"></a>

```typescript
public putEncryptionSpec(value: VectorSearchCollectionEncryptionSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.putEncryptionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpec">VectorSearchCollectionEncryptionSpec</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.putTimeouts"></a>

```typescript
public putTimeouts(value: VectorSearchCollectionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeouts">VectorSearchCollectionTimeouts</a>

---

##### `putVectorSchema` <a name="putVectorSchema" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.putVectorSchema"></a>

```typescript
public putVectorSchema(value: IResolvable | VectorSearchCollectionVectorSchema[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.putVectorSchema.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema">VectorSearchCollectionVectorSchema</a>[]

---

##### `resetDataSchema` <a name="resetDataSchema" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetDataSchema"></a>

```typescript
public resetDataSchema(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetEncryptionSpec` <a name="resetEncryptionSpec" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetEncryptionSpec"></a>

```typescript
public resetEncryptionSpec(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVectorSchema` <a name="resetVectorSchema" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.resetVectorSchema"></a>

```typescript
public resetVectorSchema(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a VectorSearchCollection resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.isConstruct"></a>

```typescript
import { vectorSearchCollection } from '@cdktn/provider-google'

vectorSearchCollection.VectorSearchCollection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.isTerraformElement"></a>

```typescript
import { vectorSearchCollection } from '@cdktn/provider-google'

vectorSearchCollection.VectorSearchCollection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.isTerraformResource"></a>

```typescript
import { vectorSearchCollection } from '@cdktn/provider-google'

vectorSearchCollection.VectorSearchCollection.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.generateConfigForImport"></a>

```typescript
import { vectorSearchCollection } from '@cdktn/provider-google'

vectorSearchCollection.VectorSearchCollection.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a VectorSearchCollection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VectorSearchCollection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VectorSearchCollection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vector_search_collection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the VectorSearchCollection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.encryptionSpec">encryptionSpec</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference">VectorSearchCollectionEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference">VectorSearchCollectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.vectorSchema">vectorSchema</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList">VectorSearchCollectionVectorSchemaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.collectionIdInput">collectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.dataSchemaInput">dataSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.encryptionSpecInput">encryptionSpecInput</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpec">VectorSearchCollectionEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeouts">VectorSearchCollectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.vectorSchemaInput">vectorSchemaInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema">VectorSearchCollectionVectorSchema</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.collectionId">collectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.dataSchema">dataSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `encryptionSpec`<sup>Required</sup> <a name="encryptionSpec" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.encryptionSpec"></a>

```typescript
public readonly encryptionSpec: VectorSearchCollectionEncryptionSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference">VectorSearchCollectionEncryptionSpecOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.timeouts"></a>

```typescript
public readonly timeouts: VectorSearchCollectionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference">VectorSearchCollectionTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `vectorSchema`<sup>Required</sup> <a name="vectorSchema" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.vectorSchema"></a>

```typescript
public readonly vectorSchema: VectorSearchCollectionVectorSchemaList;
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList">VectorSearchCollectionVectorSchemaList</a>

---

##### `collectionIdInput`<sup>Optional</sup> <a name="collectionIdInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.collectionIdInput"></a>

```typescript
public readonly collectionIdInput: string;
```

- *Type:* string

---

##### `dataSchemaInput`<sup>Optional</sup> <a name="dataSchemaInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.dataSchemaInput"></a>

```typescript
public readonly dataSchemaInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `encryptionSpecInput`<sup>Optional</sup> <a name="encryptionSpecInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.encryptionSpecInput"></a>

```typescript
public readonly encryptionSpecInput: VectorSearchCollectionEncryptionSpec;
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpec">VectorSearchCollectionEncryptionSpec</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | VectorSearchCollectionTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeouts">VectorSearchCollectionTimeouts</a>

---

##### `vectorSchemaInput`<sup>Optional</sup> <a name="vectorSchemaInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.vectorSchemaInput"></a>

```typescript
public readonly vectorSchemaInput: IResolvable | VectorSearchCollectionVectorSchema[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema">VectorSearchCollectionVectorSchema</a>[]

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.collectionId"></a>

```typescript
public readonly collectionId: string;
```

- *Type:* string

---

##### `dataSchema`<sup>Required</sup> <a name="dataSchema" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.dataSchema"></a>

```typescript
public readonly dataSchema: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VectorSearchCollectionConfig <a name="VectorSearchCollectionConfig" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.Initializer"></a>

```typescript
import { vectorSearchCollection } from '@cdktn/provider-google'

const vectorSearchCollectionConfig: vectorSearchCollection.VectorSearchCollectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.collectionId">collectionId</a></code> | <code>string</code> | ID of the Collection to create. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.dataSchema">dataSchema</a></code> | <code>string</code> | JSON Schema for data. Field names must contain only alphanumeric characters, underscores, and hyphens. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.description">description</a></code> | <code>string</code> | User-specified description of the collection. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.displayName">displayName</a></code> | <code>string</code> | User-specified display name of the collection. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.encryptionSpec">encryptionSpec</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpec">VectorSearchCollectionEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vector_search_collection#id VectorSearchCollection#id}. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vector_search_collection#project VectorSearchCollection#project}. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeouts">VectorSearchCollectionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.vectorSchema">vectorSchema</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema">VectorSearchCollectionVectorSchema</a>[]</code> | vector_schema block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.collectionId"></a>

```typescript
public readonly collectionId: string;
```

- *Type:* string

ID of the Collection to create.

The id must be 1-63 characters long, and comply with
[RFC1035](https://www.ietf.org/rfc/rfc1035.txt).
Specifically, it must be 1-63 characters long and match the regular
expression '[a-z](?:[-a-z0-9]{0,61}[a-z0-9])?'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vector_search_collection#collection_id VectorSearchCollection#collection_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vector_search_collection#location VectorSearchCollection#location}

---

##### `dataSchema`<sup>Optional</sup> <a name="dataSchema" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.dataSchema"></a>

```typescript
public readonly dataSchema: string;
```

- *Type:* string

JSON Schema for data. Field names must contain only alphanumeric characters, underscores, and hyphens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vector_search_collection#data_schema VectorSearchCollection#data_schema}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vector_search_collection#deletion_policy VectorSearchCollection#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

User-specified description of the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vector_search_collection#description VectorSearchCollection#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

User-specified display name of the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vector_search_collection#display_name VectorSearchCollection#display_name}

---

##### `encryptionSpec`<sup>Optional</sup> <a name="encryptionSpec" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.encryptionSpec"></a>

```typescript
public readonly encryptionSpec: VectorSearchCollectionEncryptionSpec;
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpec">VectorSearchCollectionEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vector_search_collection#encryption_spec VectorSearchCollection#encryption_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vector_search_collection#id VectorSearchCollection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vector_search_collection#labels VectorSearchCollection#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vector_search_collection#project VectorSearchCollection#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: VectorSearchCollectionTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeouts">VectorSearchCollectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vector_search_collection#timeouts VectorSearchCollection#timeouts}

---

##### `vectorSchema`<sup>Optional</sup> <a name="vectorSchema" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionConfig.property.vectorSchema"></a>

```typescript
public readonly vectorSchema: IResolvable | VectorSearchCollectionVectorSchema[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema">VectorSearchCollectionVectorSchema</a>[]

vector_schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vector_search_collection#vector_schema VectorSearchCollection#vector_schema}

---

### VectorSearchCollectionEncryptionSpec <a name="VectorSearchCollectionEncryptionSpec" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpec.Initializer"></a>

```typescript
import { vectorSearchCollection } from '@cdktn/provider-google'

const vectorSearchCollectionEncryptionSpec: vectorSearchCollection.VectorSearchCollectionEncryptionSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpec.property.cryptoKeyName">cryptoKeyName</a></code> | <code>string</code> | Resource name of the Cloud KMS key used to protect the resource. |

---

##### `cryptoKeyName`<sup>Required</sup> <a name="cryptoKeyName" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpec.property.cryptoKeyName"></a>

```typescript
public readonly cryptoKeyName: string;
```

- *Type:* string

Resource name of the Cloud KMS key used to protect the resource.

The Cloud KMS key must be in the same region as the resource. It must have
the format
'projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vector_search_collection#crypto_key_name VectorSearchCollection#crypto_key_name}

---

### VectorSearchCollectionTimeouts <a name="VectorSearchCollectionTimeouts" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeouts.Initializer"></a>

```typescript
import { vectorSearchCollection } from '@cdktn/provider-google'

const vectorSearchCollectionTimeouts: vectorSearchCollection.VectorSearchCollectionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vector_search_collection#create VectorSearchCollection#create}. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vector_search_collection#delete VectorSearchCollection#delete}. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vector_search_collection#update VectorSearchCollection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vector_search_collection#create VectorSearchCollection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vector_search_collection#delete VectorSearchCollection#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vector_search_collection#update VectorSearchCollection#update}.

---

### VectorSearchCollectionVectorSchema <a name="VectorSearchCollectionVectorSchema" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema.Initializer"></a>

```typescript
import { vectorSearchCollection } from '@cdktn/provider-google'

const vectorSearchCollectionVectorSchema: vectorSearchCollection.VectorSearchCollectionVectorSchema = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema.property.fieldName">fieldName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vector_search_collection#field_name VectorSearchCollection#field_name}. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema.property.denseVector">denseVector</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVector">VectorSearchCollectionVectorSchemaDenseVector</a></code> | dense_vector block. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema.property.sparseVector">sparseVector</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVector">VectorSearchCollectionVectorSchemaSparseVector</a></code> | sparse_vector block. |

---

##### `fieldName`<sup>Required</sup> <a name="fieldName" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema.property.fieldName"></a>

```typescript
public readonly fieldName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vector_search_collection#field_name VectorSearchCollection#field_name}.

---

##### `denseVector`<sup>Optional</sup> <a name="denseVector" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema.property.denseVector"></a>

```typescript
public readonly denseVector: VectorSearchCollectionVectorSchemaDenseVector;
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVector">VectorSearchCollectionVectorSchemaDenseVector</a>

dense_vector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vector_search_collection#dense_vector VectorSearchCollection#dense_vector}

---

##### `sparseVector`<sup>Optional</sup> <a name="sparseVector" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema.property.sparseVector"></a>

```typescript
public readonly sparseVector: VectorSearchCollectionVectorSchemaSparseVector;
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVector">VectorSearchCollectionVectorSchemaSparseVector</a>

sparse_vector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vector_search_collection#sparse_vector VectorSearchCollection#sparse_vector}

---

### VectorSearchCollectionVectorSchemaDenseVector <a name="VectorSearchCollectionVectorSchemaDenseVector" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVector.Initializer"></a>

```typescript
import { vectorSearchCollection } from '@cdktn/provider-google'

const vectorSearchCollectionVectorSchemaDenseVector: vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVector = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVector.property.dimensions">dimensions</a></code> | <code>number</code> | Dimensionality of the vector field. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVector.property.vertexEmbeddingConfig">vertexEmbeddingConfig</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig">VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig</a></code> | vertex_embedding_config block. |

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVector.property.dimensions"></a>

```typescript
public readonly dimensions: number;
```

- *Type:* number

Dimensionality of the vector field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vector_search_collection#dimensions VectorSearchCollection#dimensions}

---

##### `vertexEmbeddingConfig`<sup>Optional</sup> <a name="vertexEmbeddingConfig" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVector.property.vertexEmbeddingConfig"></a>

```typescript
public readonly vertexEmbeddingConfig: VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig;
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig">VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig</a>

vertex_embedding_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vector_search_collection#vertex_embedding_config VectorSearchCollection#vertex_embedding_config}

---

### VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig <a name="VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig.Initializer"></a>

```typescript
import { vectorSearchCollection } from '@cdktn/provider-google'

const vectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig: vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig.property.modelId">modelId</a></code> | <code>string</code> | Required: ID of the embedding model to use. See https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#embeddings-models for the list of supported models. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig.property.taskType">taskType</a></code> | <code>string</code> | Possible values: RETRIEVAL_QUERY RETRIEVAL_DOCUMENT SEMANTIC_SIMILARITY CLASSIFICATION CLUSTERING QUESTION_ANSWERING FACT_VERIFICATION CODE_RETRIEVAL_QUERY. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig.property.textTemplate">textTemplate</a></code> | <code>string</code> | Required: Text template for the input to the model. |

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig.property.modelId"></a>

```typescript
public readonly modelId: string;
```

- *Type:* string

Required: ID of the embedding model to use. See https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models#embeddings-models for the list of supported models.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vector_search_collection#model_id VectorSearchCollection#model_id}

---

##### `taskType`<sup>Required</sup> <a name="taskType" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig.property.taskType"></a>

```typescript
public readonly taskType: string;
```

- *Type:* string

Possible values: RETRIEVAL_QUERY RETRIEVAL_DOCUMENT SEMANTIC_SIMILARITY CLASSIFICATION CLUSTERING QUESTION_ANSWERING FACT_VERIFICATION CODE_RETRIEVAL_QUERY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vector_search_collection#task_type VectorSearchCollection#task_type}

---

##### `textTemplate`<sup>Required</sup> <a name="textTemplate" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig.property.textTemplate"></a>

```typescript
public readonly textTemplate: string;
```

- *Type:* string

Required: Text template for the input to the model.

The template must
contain one or more references to fields in the DataObject, e.g.:
"Movie Title: {title} ---- Movie Plot: {plot}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vector_search_collection#text_template VectorSearchCollection#text_template}

---

### VectorSearchCollectionVectorSchemaSparseVector <a name="VectorSearchCollectionVectorSchemaSparseVector" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVector.Initializer"></a>

```typescript
import { vectorSearchCollection } from '@cdktn/provider-google'

const vectorSearchCollectionVectorSchemaSparseVector: vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVector = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### VectorSearchCollectionEncryptionSpecOutputReference <a name="VectorSearchCollectionEncryptionSpecOutputReference" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.Initializer"></a>

```typescript
import { vectorSearchCollection } from '@cdktn/provider-google'

new vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.property.cryptoKeyNameInput">cryptoKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.property.cryptoKeyName">cryptoKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpec">VectorSearchCollectionEncryptionSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cryptoKeyNameInput`<sup>Optional</sup> <a name="cryptoKeyNameInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.property.cryptoKeyNameInput"></a>

```typescript
public readonly cryptoKeyNameInput: string;
```

- *Type:* string

---

##### `cryptoKeyName`<sup>Required</sup> <a name="cryptoKeyName" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.property.cryptoKeyName"></a>

```typescript
public readonly cryptoKeyName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VectorSearchCollectionEncryptionSpec;
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionEncryptionSpec">VectorSearchCollectionEncryptionSpec</a>

---


### VectorSearchCollectionTimeoutsOutputReference <a name="VectorSearchCollectionTimeoutsOutputReference" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.Initializer"></a>

```typescript
import { vectorSearchCollection } from '@cdktn/provider-google'

new vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeouts">VectorSearchCollectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VectorSearchCollectionTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionTimeouts">VectorSearchCollectionTimeouts</a>

---


### VectorSearchCollectionVectorSchemaDenseVectorOutputReference <a name="VectorSearchCollectionVectorSchemaDenseVectorOutputReference" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.Initializer"></a>

```typescript
import { vectorSearchCollection } from '@cdktn/provider-google'

new vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.putVertexEmbeddingConfig">putVertexEmbeddingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.resetDimensions">resetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.resetVertexEmbeddingConfig">resetVertexEmbeddingConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVertexEmbeddingConfig` <a name="putVertexEmbeddingConfig" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.putVertexEmbeddingConfig"></a>

```typescript
public putVertexEmbeddingConfig(value: VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.putVertexEmbeddingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig">VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig</a>

---

##### `resetDimensions` <a name="resetDimensions" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.resetDimensions"></a>

```typescript
public resetDimensions(): void
```

##### `resetVertexEmbeddingConfig` <a name="resetVertexEmbeddingConfig" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.resetVertexEmbeddingConfig"></a>

```typescript
public resetVertexEmbeddingConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.property.vertexEmbeddingConfig">vertexEmbeddingConfig</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference">VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.property.dimensionsInput">dimensionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.property.vertexEmbeddingConfigInput">vertexEmbeddingConfigInput</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig">VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.property.dimensions">dimensions</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVector">VectorSearchCollectionVectorSchemaDenseVector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `vertexEmbeddingConfig`<sup>Required</sup> <a name="vertexEmbeddingConfig" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.property.vertexEmbeddingConfig"></a>

```typescript
public readonly vertexEmbeddingConfig: VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference">VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference</a>

---

##### `dimensionsInput`<sup>Optional</sup> <a name="dimensionsInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.property.dimensionsInput"></a>

```typescript
public readonly dimensionsInput: number;
```

- *Type:* number

---

##### `vertexEmbeddingConfigInput`<sup>Optional</sup> <a name="vertexEmbeddingConfigInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.property.vertexEmbeddingConfigInput"></a>

```typescript
public readonly vertexEmbeddingConfigInput: VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig;
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig">VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig</a>

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.property.dimensions"></a>

```typescript
public readonly dimensions: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VectorSearchCollectionVectorSchemaDenseVector;
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVector">VectorSearchCollectionVectorSchemaDenseVector</a>

---


### VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference <a name="VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.Initializer"></a>

```typescript
import { vectorSearchCollection } from '@cdktn/provider-google'

new vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.modelIdInput">modelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.taskTypeInput">taskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.textTemplateInput">textTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.modelId">modelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.taskType">taskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.textTemplate">textTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig">VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modelIdInput`<sup>Optional</sup> <a name="modelIdInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.modelIdInput"></a>

```typescript
public readonly modelIdInput: string;
```

- *Type:* string

---

##### `taskTypeInput`<sup>Optional</sup> <a name="taskTypeInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.taskTypeInput"></a>

```typescript
public readonly taskTypeInput: string;
```

- *Type:* string

---

##### `textTemplateInput`<sup>Optional</sup> <a name="textTemplateInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.textTemplateInput"></a>

```typescript
public readonly textTemplateInput: string;
```

- *Type:* string

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.modelId"></a>

```typescript
public readonly modelId: string;
```

- *Type:* string

---

##### `taskType`<sup>Required</sup> <a name="taskType" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.taskType"></a>

```typescript
public readonly taskType: string;
```

- *Type:* string

---

##### `textTemplate`<sup>Required</sup> <a name="textTemplate" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.textTemplate"></a>

```typescript
public readonly textTemplate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig;
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig">VectorSearchCollectionVectorSchemaDenseVectorVertexEmbeddingConfig</a>

---


### VectorSearchCollectionVectorSchemaList <a name="VectorSearchCollectionVectorSchemaList" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.Initializer"></a>

```typescript
import { vectorSearchCollection } from '@cdktn/provider-google'

new vectorSearchCollection.VectorSearchCollectionVectorSchemaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.get"></a>

```typescript
public get(index: number): VectorSearchCollectionVectorSchemaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema">VectorSearchCollectionVectorSchema</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VectorSearchCollectionVectorSchema[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema">VectorSearchCollectionVectorSchema</a>[]

---


### VectorSearchCollectionVectorSchemaOutputReference <a name="VectorSearchCollectionVectorSchemaOutputReference" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.Initializer"></a>

```typescript
import { vectorSearchCollection } from '@cdktn/provider-google'

new vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.putDenseVector">putDenseVector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.putSparseVector">putSparseVector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.resetDenseVector">resetDenseVector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.resetSparseVector">resetSparseVector</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDenseVector` <a name="putDenseVector" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.putDenseVector"></a>

```typescript
public putDenseVector(value: VectorSearchCollectionVectorSchemaDenseVector): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.putDenseVector.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVector">VectorSearchCollectionVectorSchemaDenseVector</a>

---

##### `putSparseVector` <a name="putSparseVector" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.putSparseVector"></a>

```typescript
public putSparseVector(value: VectorSearchCollectionVectorSchemaSparseVector): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.putSparseVector.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVector">VectorSearchCollectionVectorSchemaSparseVector</a>

---

##### `resetDenseVector` <a name="resetDenseVector" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.resetDenseVector"></a>

```typescript
public resetDenseVector(): void
```

##### `resetSparseVector` <a name="resetSparseVector" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.resetSparseVector"></a>

```typescript
public resetSparseVector(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.denseVector">denseVector</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference">VectorSearchCollectionVectorSchemaDenseVectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.sparseVector">sparseVector</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference">VectorSearchCollectionVectorSchemaSparseVectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.denseVectorInput">denseVectorInput</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVector">VectorSearchCollectionVectorSchemaDenseVector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.fieldNameInput">fieldNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.sparseVectorInput">sparseVectorInput</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVector">VectorSearchCollectionVectorSchemaSparseVector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.fieldName">fieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema">VectorSearchCollectionVectorSchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `denseVector`<sup>Required</sup> <a name="denseVector" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.denseVector"></a>

```typescript
public readonly denseVector: VectorSearchCollectionVectorSchemaDenseVectorOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVectorOutputReference">VectorSearchCollectionVectorSchemaDenseVectorOutputReference</a>

---

##### `sparseVector`<sup>Required</sup> <a name="sparseVector" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.sparseVector"></a>

```typescript
public readonly sparseVector: VectorSearchCollectionVectorSchemaSparseVectorOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference">VectorSearchCollectionVectorSchemaSparseVectorOutputReference</a>

---

##### `denseVectorInput`<sup>Optional</sup> <a name="denseVectorInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.denseVectorInput"></a>

```typescript
public readonly denseVectorInput: VectorSearchCollectionVectorSchemaDenseVector;
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaDenseVector">VectorSearchCollectionVectorSchemaDenseVector</a>

---

##### `fieldNameInput`<sup>Optional</sup> <a name="fieldNameInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.fieldNameInput"></a>

```typescript
public readonly fieldNameInput: string;
```

- *Type:* string

---

##### `sparseVectorInput`<sup>Optional</sup> <a name="sparseVectorInput" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.sparseVectorInput"></a>

```typescript
public readonly sparseVectorInput: VectorSearchCollectionVectorSchemaSparseVector;
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVector">VectorSearchCollectionVectorSchemaSparseVector</a>

---

##### `fieldName`<sup>Required</sup> <a name="fieldName" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.fieldName"></a>

```typescript
public readonly fieldName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VectorSearchCollectionVectorSchema;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchema">VectorSearchCollectionVectorSchema</a>

---


### VectorSearchCollectionVectorSchemaSparseVectorOutputReference <a name="VectorSearchCollectionVectorSchemaSparseVectorOutputReference" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.Initializer"></a>

```typescript
import { vectorSearchCollection } from '@cdktn/provider-google'

new vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVector">VectorSearchCollectionVectorSchemaSparseVector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VectorSearchCollectionVectorSchemaSparseVector;
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchCollection.VectorSearchCollectionVectorSchemaSparseVector">VectorSearchCollectionVectorSchemaSparseVector</a>

---



