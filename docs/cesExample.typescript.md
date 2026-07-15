# `cesExample` Submodule <a name="`cesExample` Submodule" id="@cdktn/provider-google.cesExample"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CesExample <a name="CesExample" id="@cdktn/provider-google.cesExample.CesExample"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/ces_example google_ces_example}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesExample.CesExample.Initializer"></a>

```typescript
import { cesExample } from '@cdktn/provider-google'

new cesExample.CesExample(scope: Construct, id: string, config: CesExampleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig">CesExampleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cesExample.CesExample.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesExample.CesExample.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.cesExample.CesExample.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleConfig">CesExampleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.putMessages">putMessages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.resetEntryAgent">resetEntryAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.resetMessages">resetMessages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesExample.CesExample.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.cesExample.CesExample.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.cesExample.CesExample.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.cesExample.CesExample.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.cesExample.CesExample.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesExample.CesExample.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.cesExample.CesExample.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.cesExample.CesExample.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.cesExample.CesExample.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.cesExample.CesExample.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.cesExample.CesExample.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.cesExample.CesExample.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.cesExample.CesExample.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.cesExample.CesExample.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesExample.CesExample.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExample.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesExample.CesExample.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExample.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesExample.CesExample.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExample.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesExample.CesExample.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExample.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesExample.CesExample.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExample.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesExample.CesExample.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExample.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesExample.CesExample.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExample.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesExample.CesExample.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExample.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesExample.CesExample.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExample.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.cesExample.CesExample.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.cesExample.CesExample.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesExample.CesExample.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesExample.CesExample.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesExample.CesExample.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExample.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.cesExample.CesExample.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesExample.CesExample.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.cesExample.CesExample.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.cesExample.CesExample.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.cesExample.CesExample.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.cesExample.CesExample.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesExample.CesExample.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMessages` <a name="putMessages" id="@cdktn/provider-google.cesExample.CesExample.putMessages"></a>

```typescript
public putMessages(value: IResolvable | CesExampleMessages[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesExample.CesExample.putMessages.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesExample.CesExampleMessages">CesExampleMessages</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.cesExample.CesExample.putTimeouts"></a>

```typescript
public putTimeouts(value: CesExampleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesExample.CesExample.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleTimeouts">CesExampleTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.cesExample.CesExample.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.cesExample.CesExample.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEntryAgent` <a name="resetEntryAgent" id="@cdktn/provider-google.cesExample.CesExample.resetEntryAgent"></a>

```typescript
public resetEntryAgent(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.cesExample.CesExample.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMessages` <a name="resetMessages" id="@cdktn/provider-google.cesExample.CesExample.resetMessages"></a>

```typescript
public resetMessages(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.cesExample.CesExample.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.cesExample.CesExample.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CesExample resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.cesExample.CesExample.isConstruct"></a>

```typescript
import { cesExample } from '@cdktn/provider-google'

cesExample.CesExample.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cesExample.CesExample.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.cesExample.CesExample.isTerraformElement"></a>

```typescript
import { cesExample } from '@cdktn/provider-google'

cesExample.CesExample.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cesExample.CesExample.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.cesExample.CesExample.isTerraformResource"></a>

```typescript
import { cesExample } from '@cdktn/provider-google'

cesExample.CesExample.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cesExample.CesExample.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.cesExample.CesExample.generateConfigForImport"></a>

```typescript
import { cesExample } from '@cdktn/provider-google'

cesExample.CesExample.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CesExample resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cesExample.CesExample.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.cesExample.CesExample.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CesExample to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.cesExample.CesExample.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CesExample that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/ces_example#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesExample.CesExample.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CesExample to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.invalid">invalid</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.messages">messages</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesList">CesExampleMessagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference">CesExampleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.appInput">appInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.entryAgentInput">entryAgentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.exampleIdInput">exampleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.messagesInput">messagesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesExample.CesExampleMessages">CesExampleMessages</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesExample.CesExampleTimeouts">CesExampleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.app">app</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.entryAgent">entryAgent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.exampleId">exampleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.cesExample.CesExample.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.cesExample.CesExample.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesExample.CesExample.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.cesExample.CesExample.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.cesExample.CesExample.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.cesExample.CesExample.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.cesExample.CesExample.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cesExample.CesExample.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cesExample.CesExample.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.cesExample.CesExample.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.cesExample.CesExample.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cesExample.CesExample.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesExample.CesExample.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cesExample.CesExample.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.cesExample.CesExample.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.cesExample.CesExample.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `invalid`<sup>Required</sup> <a name="invalid" id="@cdktn/provider-google.cesExample.CesExample.property.invalid"></a>

```typescript
public readonly invalid: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `messages`<sup>Required</sup> <a name="messages" id="@cdktn/provider-google.cesExample.CesExample.property.messages"></a>

```typescript
public readonly messages: CesExampleMessagesList;
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesList">CesExampleMessagesList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cesExample.CesExample.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.cesExample.CesExample.property.timeouts"></a>

```typescript
public readonly timeouts: CesExampleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference">CesExampleTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.cesExample.CesExample.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `appInput`<sup>Optional</sup> <a name="appInput" id="@cdktn/provider-google.cesExample.CesExample.property.appInput"></a>

```typescript
public readonly appInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.cesExample.CesExample.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.cesExample.CesExample.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.cesExample.CesExample.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `entryAgentInput`<sup>Optional</sup> <a name="entryAgentInput" id="@cdktn/provider-google.cesExample.CesExample.property.entryAgentInput"></a>

```typescript
public readonly entryAgentInput: string;
```

- *Type:* string

---

##### `exampleIdInput`<sup>Optional</sup> <a name="exampleIdInput" id="@cdktn/provider-google.cesExample.CesExample.property.exampleIdInput"></a>

```typescript
public readonly exampleIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.cesExample.CesExample.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.cesExample.CesExample.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `messagesInput`<sup>Optional</sup> <a name="messagesInput" id="@cdktn/provider-google.cesExample.CesExample.property.messagesInput"></a>

```typescript
public readonly messagesInput: IResolvable | CesExampleMessages[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesExample.CesExampleMessages">CesExampleMessages</a>[]

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.cesExample.CesExample.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.cesExample.CesExample.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CesExampleTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesExample.CesExampleTimeouts">CesExampleTimeouts</a>

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google.cesExample.CesExample.property.app"></a>

```typescript
public readonly app: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.cesExample.CesExample.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesExample.CesExample.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.cesExample.CesExample.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `entryAgent`<sup>Required</sup> <a name="entryAgent" id="@cdktn/provider-google.cesExample.CesExample.property.entryAgent"></a>

```typescript
public readonly entryAgent: string;
```

- *Type:* string

---

##### `exampleId`<sup>Required</sup> <a name="exampleId" id="@cdktn/provider-google.cesExample.CesExample.property.exampleId"></a>

```typescript
public readonly exampleId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesExample.CesExample.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.cesExample.CesExample.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.cesExample.CesExample.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExample.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.cesExample.CesExample.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CesExampleConfig <a name="CesExampleConfig" id="@cdktn/provider-google.cesExample.CesExampleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesExample.CesExampleConfig.Initializer"></a>

```typescript
import { cesExample } from '@cdktn/provider-google'

const cesExampleConfig: cesExample.CesExampleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.app">app</a></code> | <code>string</code> | Resource ID segment making up resource 'name', defining the app the example belongs to. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.displayName">displayName</a></code> | <code>string</code> | Display name of the example. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.exampleId">exampleId</a></code> | <code>string</code> | The ID to use for the example, which will become the final component of the example's resource name. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name', defining what region the parent app is in. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.description">description</a></code> | <code>string</code> | Human-readable description of the example. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.entryAgent">entryAgent</a></code> | <code>string</code> | The agent that initially handles the conversation. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/ces_example#id CesExample#id}. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.messages">messages</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesExample.CesExampleMessages">CesExampleMessages</a>[]</code> | messages block. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/ces_example#project CesExample#project}. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeouts">CesExampleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.app"></a>

```typescript
public readonly app: string;
```

- *Type:* string

Resource ID segment making up resource 'name', defining the app the example belongs to.

It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/ces_example#app CesExample#app}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Display name of the example.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/ces_example#display_name CesExample#display_name}

---

##### `exampleId`<sup>Required</sup> <a name="exampleId" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.exampleId"></a>

```typescript
public readonly exampleId: string;
```

- *Type:* string

The ID to use for the example, which will become the final component of the example's resource name.

In Terraform, this field is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/ces_example#example_id CesExample#example_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name', defining what region the parent app is in.

It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/ces_example#location CesExample#location}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/ces_example#deletion_policy CesExample#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Human-readable description of the example.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/ces_example#description CesExample#description}

---

##### `entryAgent`<sup>Optional</sup> <a name="entryAgent" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.entryAgent"></a>

```typescript
public readonly entryAgent: string;
```

- *Type:* string

The agent that initially handles the conversation.

If not specified, the
example represents a conversation that is handled by the root agent.
Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/ces_example#entry_agent CesExample#entry_agent}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/ces_example#id CesExample#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `messages`<sup>Optional</sup> <a name="messages" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.messages"></a>

```typescript
public readonly messages: IResolvable | CesExampleMessages[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesExample.CesExampleMessages">CesExampleMessages</a>[]

messages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/ces_example#messages CesExample#messages}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/ces_example#project CesExample#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.cesExample.CesExampleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CesExampleTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleTimeouts">CesExampleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/ces_example#timeouts CesExample#timeouts}

---

### CesExampleMessages <a name="CesExampleMessages" id="@cdktn/provider-google.cesExample.CesExampleMessages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesExample.CesExampleMessages.Initializer"></a>

```typescript
import { cesExample } from '@cdktn/provider-google'

const cesExampleMessages: cesExample.CesExampleMessages = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessages.property.chunks">chunks</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunks">CesExampleMessagesChunks</a>[]</code> | chunks block. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessages.property.role">role</a></code> | <code>string</code> | The role within the conversation, e.g., user, agent. |

---

##### `chunks`<sup>Optional</sup> <a name="chunks" id="@cdktn/provider-google.cesExample.CesExampleMessages.property.chunks"></a>

```typescript
public readonly chunks: IResolvable | CesExampleMessagesChunks[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunks">CesExampleMessagesChunks</a>[]

chunks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/ces_example#chunks CesExample#chunks}

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktn/provider-google.cesExample.CesExampleMessages.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

The role within the conversation, e.g., user, agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/ces_example#role CesExample#role}

---

### CesExampleMessagesChunks <a name="CesExampleMessagesChunks" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunks.Initializer"></a>

```typescript
import { cesExample } from '@cdktn/provider-google'

const cesExampleMessagesChunks: cesExample.CesExampleMessagesChunks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunks.property.agentTransfer">agentTransfer</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransfer">CesExampleMessagesChunksAgentTransfer</a></code> | agent_transfer block. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunks.property.image">image</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImage">CesExampleMessagesChunksImage</a></code> | image block. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunks.property.text">text</a></code> | <code>string</code> | Text data. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunks.property.toolCall">toolCall</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCall">CesExampleMessagesChunksToolCall</a></code> | tool_call block. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunks.property.toolResponse">toolResponse</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponse">CesExampleMessagesChunksToolResponse</a></code> | tool_response block. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunks.property.updatedVariables">updatedVariables</a></code> | <code>string</code> | A struct represents variables that were updated in the conversation, keyed by variable names. |

---

##### `agentTransfer`<sup>Optional</sup> <a name="agentTransfer" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunks.property.agentTransfer"></a>

```typescript
public readonly agentTransfer: CesExampleMessagesChunksAgentTransfer;
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransfer">CesExampleMessagesChunksAgentTransfer</a>

agent_transfer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/ces_example#agent_transfer CesExample#agent_transfer}

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunks.property.image"></a>

```typescript
public readonly image: CesExampleMessagesChunksImage;
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImage">CesExampleMessagesChunksImage</a>

image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/ces_example#image CesExample#image}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunks.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

Text data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/ces_example#text CesExample#text}

---

##### `toolCall`<sup>Optional</sup> <a name="toolCall" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunks.property.toolCall"></a>

```typescript
public readonly toolCall: CesExampleMessagesChunksToolCall;
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCall">CesExampleMessagesChunksToolCall</a>

tool_call block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/ces_example#tool_call CesExample#tool_call}

---

##### `toolResponse`<sup>Optional</sup> <a name="toolResponse" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunks.property.toolResponse"></a>

```typescript
public readonly toolResponse: CesExampleMessagesChunksToolResponse;
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponse">CesExampleMessagesChunksToolResponse</a>

tool_response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/ces_example#tool_response CesExample#tool_response}

---

##### `updatedVariables`<sup>Optional</sup> <a name="updatedVariables" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunks.property.updatedVariables"></a>

```typescript
public readonly updatedVariables: string;
```

- *Type:* string

A struct represents variables that were updated in the conversation, keyed by variable names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/ces_example#updated_variables CesExample#updated_variables}

---

### CesExampleMessagesChunksAgentTransfer <a name="CesExampleMessagesChunksAgentTransfer" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransfer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransfer.Initializer"></a>

```typescript
import { cesExample } from '@cdktn/provider-google'

const cesExampleMessagesChunksAgentTransfer: cesExample.CesExampleMessagesChunksAgentTransfer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransfer.property.targetAgent">targetAgent</a></code> | <code>string</code> | The agent to which the conversation is being transferred. The agent will handle the conversation from this point forward. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'. |

---

##### `targetAgent`<sup>Required</sup> <a name="targetAgent" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransfer.property.targetAgent"></a>

```typescript
public readonly targetAgent: string;
```

- *Type:* string

The agent to which the conversation is being transferred. The agent will handle the conversation from this point forward. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/ces_example#target_agent CesExample#target_agent}

---

### CesExampleMessagesChunksImage <a name="CesExampleMessagesChunksImage" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImage.Initializer"></a>

```typescript
import { cesExample } from '@cdktn/provider-google'

const cesExampleMessagesChunksImage: cesExample.CesExampleMessagesChunksImage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImage.property.data">data</a></code> | <code>string</code> | Raw bytes of the image. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImage.property.mimeType">mimeType</a></code> | <code>string</code> | The IANA standard MIME type of the source data. Supported image types includes: * image/png * image/jpeg * image/webp. |

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImage.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

Raw bytes of the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/ces_example#data CesExample#data}

---

##### `mimeType`<sup>Required</sup> <a name="mimeType" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImage.property.mimeType"></a>

```typescript
public readonly mimeType: string;
```

- *Type:* string

The IANA standard MIME type of the source data. Supported image types includes: * image/png * image/jpeg * image/webp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/ces_example#mime_type CesExample#mime_type}

---

### CesExampleMessagesChunksToolCall <a name="CesExampleMessagesChunksToolCall" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCall"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCall.Initializer"></a>

```typescript
import { cesExample } from '@cdktn/provider-google'

const cesExampleMessagesChunksToolCall: cesExample.CesExampleMessagesChunksToolCall = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCall.property.args">args</a></code> | <code>string</code> | The input parameters and values for the tool in JSON object format. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCall.property.id">id</a></code> | <code>string</code> | The unique identifier of the tool call. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCall.property.tool">tool</a></code> | <code>string</code> | The name of the tool to execute. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCall.property.toolsetTool">toolsetTool</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetTool">CesExampleMessagesChunksToolCallToolsetTool</a></code> | toolset_tool block. |

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCall.property.args"></a>

```typescript
public readonly args: string;
```

- *Type:* string

The input parameters and values for the tool in JSON object format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/ces_example#args CesExample#args}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCall.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The unique identifier of the tool call.

If populated, the client should
return the execution result with the matching ID in
ToolResponse.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/ces_example#id CesExample#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tool`<sup>Optional</sup> <a name="tool" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCall.property.tool"></a>

```typescript
public readonly tool: string;
```

- *Type:* string

The name of the tool to execute. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/ces_example#tool CesExample#tool}

---

##### `toolsetTool`<sup>Optional</sup> <a name="toolsetTool" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCall.property.toolsetTool"></a>

```typescript
public readonly toolsetTool: CesExampleMessagesChunksToolCallToolsetTool;
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetTool">CesExampleMessagesChunksToolCallToolsetTool</a>

toolset_tool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/ces_example#toolset_tool CesExample#toolset_tool}

---

### CesExampleMessagesChunksToolCallToolsetTool <a name="CesExampleMessagesChunksToolCallToolsetTool" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetTool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetTool.Initializer"></a>

```typescript
import { cesExample } from '@cdktn/provider-google'

const cesExampleMessagesChunksToolCallToolsetTool: cesExample.CesExampleMessagesChunksToolCallToolsetTool = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetTool.property.toolset">toolset</a></code> | <code>string</code> | The resource name of the Toolset from which this tool is derived. Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetTool.property.toolId">toolId</a></code> | <code>string</code> | The tool ID to filter the tools to retrieve the schema for. |

---

##### `toolset`<sup>Required</sup> <a name="toolset" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetTool.property.toolset"></a>

```typescript
public readonly toolset: string;
```

- *Type:* string

The resource name of the Toolset from which this tool is derived. Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/ces_example#toolset CesExample#toolset}

---

##### `toolId`<sup>Optional</sup> <a name="toolId" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetTool.property.toolId"></a>

```typescript
public readonly toolId: string;
```

- *Type:* string

The tool ID to filter the tools to retrieve the schema for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/ces_example#tool_id CesExample#tool_id}

---

### CesExampleMessagesChunksToolResponse <a name="CesExampleMessagesChunksToolResponse" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponse.Initializer"></a>

```typescript
import { cesExample } from '@cdktn/provider-google'

const cesExampleMessagesChunksToolResponse: cesExample.CesExampleMessagesChunksToolResponse = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponse.property.response">response</a></code> | <code>string</code> | The tool execution result in JSON object format. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponse.property.id">id</a></code> | <code>string</code> | The matching ID of the tool call the response is for. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponse.property.tool">tool</a></code> | <code>string</code> | The name of the tool to execute. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponse.property.toolsetTool">toolsetTool</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetTool">CesExampleMessagesChunksToolResponseToolsetTool</a></code> | toolset_tool block. |

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponse.property.response"></a>

```typescript
public readonly response: string;
```

- *Type:* string

The tool execution result in JSON object format.

Use "output" key to specify tool response and "error" key to specify
error details (if any). If "output" and "error" keys are not specified,
then whole "response" is treated as tool execution result.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/ces_example#response CesExample#response}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponse.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The matching ID of the tool call the response is for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/ces_example#id CesExample#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tool`<sup>Optional</sup> <a name="tool" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponse.property.tool"></a>

```typescript
public readonly tool: string;
```

- *Type:* string

The name of the tool to execute. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/ces_example#tool CesExample#tool}

---

##### `toolsetTool`<sup>Optional</sup> <a name="toolsetTool" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponse.property.toolsetTool"></a>

```typescript
public readonly toolsetTool: CesExampleMessagesChunksToolResponseToolsetTool;
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetTool">CesExampleMessagesChunksToolResponseToolsetTool</a>

toolset_tool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/ces_example#toolset_tool CesExample#toolset_tool}

---

### CesExampleMessagesChunksToolResponseToolsetTool <a name="CesExampleMessagesChunksToolResponseToolsetTool" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetTool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetTool.Initializer"></a>

```typescript
import { cesExample } from '@cdktn/provider-google'

const cesExampleMessagesChunksToolResponseToolsetTool: cesExample.CesExampleMessagesChunksToolResponseToolsetTool = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetTool.property.toolset">toolset</a></code> | <code>string</code> | The resource name of the Toolset from which this tool is derived. Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetTool.property.toolId">toolId</a></code> | <code>string</code> | The tool ID to filter the tools to retrieve the schema for. |

---

##### `toolset`<sup>Required</sup> <a name="toolset" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetTool.property.toolset"></a>

```typescript
public readonly toolset: string;
```

- *Type:* string

The resource name of the Toolset from which this tool is derived. Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/ces_example#toolset CesExample#toolset}

---

##### `toolId`<sup>Optional</sup> <a name="toolId" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetTool.property.toolId"></a>

```typescript
public readonly toolId: string;
```

- *Type:* string

The tool ID to filter the tools to retrieve the schema for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/ces_example#tool_id CesExample#tool_id}

---

### CesExampleTimeouts <a name="CesExampleTimeouts" id="@cdktn/provider-google.cesExample.CesExampleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesExample.CesExampleTimeouts.Initializer"></a>

```typescript
import { cesExample } from '@cdktn/provider-google'

const cesExampleTimeouts: cesExample.CesExampleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/ces_example#create CesExample#create}. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/ces_example#delete CesExample#delete}. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/ces_example#update CesExample#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.cesExample.CesExampleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/ces_example#create CesExample#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.cesExample.CesExampleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/ces_example#delete CesExample#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.cesExample.CesExampleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/ces_example#update CesExample#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CesExampleMessagesChunksAgentTransferOutputReference <a name="CesExampleMessagesChunksAgentTransferOutputReference" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.Initializer"></a>

```typescript
import { cesExample } from '@cdktn/provider-google'

new cesExample.CesExampleMessagesChunksAgentTransferOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.property.targetAgentInput">targetAgentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.property.targetAgent">targetAgent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransfer">CesExampleMessagesChunksAgentTransfer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `targetAgentInput`<sup>Optional</sup> <a name="targetAgentInput" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.property.targetAgentInput"></a>

```typescript
public readonly targetAgentInput: string;
```

- *Type:* string

---

##### `targetAgent`<sup>Required</sup> <a name="targetAgent" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.property.targetAgent"></a>

```typescript
public readonly targetAgent: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesExampleMessagesChunksAgentTransfer;
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransfer">CesExampleMessagesChunksAgentTransfer</a>

---


### CesExampleMessagesChunksImageOutputReference <a name="CesExampleMessagesChunksImageOutputReference" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.Initializer"></a>

```typescript
import { cesExample } from '@cdktn/provider-google'

new cesExample.CesExampleMessagesChunksImageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.property.dataInput">dataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.property.mimeTypeInput">mimeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.property.data">data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.property.mimeType">mimeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImage">CesExampleMessagesChunksImage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.property.dataInput"></a>

```typescript
public readonly dataInput: string;
```

- *Type:* string

---

##### `mimeTypeInput`<sup>Optional</sup> <a name="mimeTypeInput" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.property.mimeTypeInput"></a>

```typescript
public readonly mimeTypeInput: string;
```

- *Type:* string

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

---

##### `mimeType`<sup>Required</sup> <a name="mimeType" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.property.mimeType"></a>

```typescript
public readonly mimeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesExampleMessagesChunksImage;
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImage">CesExampleMessagesChunksImage</a>

---


### CesExampleMessagesChunksList <a name="CesExampleMessagesChunksList" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.Initializer"></a>

```typescript
import { cesExample } from '@cdktn/provider-google'

new cesExample.CesExampleMessagesChunksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.get"></a>

```typescript
public get(index: number): CesExampleMessagesChunksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunks">CesExampleMessagesChunks</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CesExampleMessagesChunks[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunks">CesExampleMessagesChunks</a>[]

---


### CesExampleMessagesChunksOutputReference <a name="CesExampleMessagesChunksOutputReference" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.Initializer"></a>

```typescript
import { cesExample } from '@cdktn/provider-google'

new cesExample.CesExampleMessagesChunksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.putAgentTransfer">putAgentTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.putImage">putImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.putToolCall">putToolCall</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.putToolResponse">putToolResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.resetAgentTransfer">resetAgentTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.resetImage">resetImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.resetText">resetText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.resetToolCall">resetToolCall</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.resetToolResponse">resetToolResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.resetUpdatedVariables">resetUpdatedVariables</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAgentTransfer` <a name="putAgentTransfer" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.putAgentTransfer"></a>

```typescript
public putAgentTransfer(value: CesExampleMessagesChunksAgentTransfer): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.putAgentTransfer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransfer">CesExampleMessagesChunksAgentTransfer</a>

---

##### `putImage` <a name="putImage" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.putImage"></a>

```typescript
public putImage(value: CesExampleMessagesChunksImage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.putImage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImage">CesExampleMessagesChunksImage</a>

---

##### `putToolCall` <a name="putToolCall" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.putToolCall"></a>

```typescript
public putToolCall(value: CesExampleMessagesChunksToolCall): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.putToolCall.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCall">CesExampleMessagesChunksToolCall</a>

---

##### `putToolResponse` <a name="putToolResponse" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.putToolResponse"></a>

```typescript
public putToolResponse(value: CesExampleMessagesChunksToolResponse): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.putToolResponse.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponse">CesExampleMessagesChunksToolResponse</a>

---

##### `resetAgentTransfer` <a name="resetAgentTransfer" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.resetAgentTransfer"></a>

```typescript
public resetAgentTransfer(): void
```

##### `resetImage` <a name="resetImage" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.resetImage"></a>

```typescript
public resetImage(): void
```

##### `resetText` <a name="resetText" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.resetText"></a>

```typescript
public resetText(): void
```

##### `resetToolCall` <a name="resetToolCall" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.resetToolCall"></a>

```typescript
public resetToolCall(): void
```

##### `resetToolResponse` <a name="resetToolResponse" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.resetToolResponse"></a>

```typescript
public resetToolResponse(): void
```

##### `resetUpdatedVariables` <a name="resetUpdatedVariables" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.resetUpdatedVariables"></a>

```typescript
public resetUpdatedVariables(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.agentTransfer">agentTransfer</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference">CesExampleMessagesChunksAgentTransferOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.image">image</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference">CesExampleMessagesChunksImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.toolCall">toolCall</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference">CesExampleMessagesChunksToolCallOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.toolResponse">toolResponse</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference">CesExampleMessagesChunksToolResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.agentTransferInput">agentTransferInput</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransfer">CesExampleMessagesChunksAgentTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.imageInput">imageInput</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImage">CesExampleMessagesChunksImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.textInput">textInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.toolCallInput">toolCallInput</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCall">CesExampleMessagesChunksToolCall</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.toolResponseInput">toolResponseInput</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponse">CesExampleMessagesChunksToolResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.updatedVariablesInput">updatedVariablesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.text">text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.updatedVariables">updatedVariables</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunks">CesExampleMessagesChunks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `agentTransfer`<sup>Required</sup> <a name="agentTransfer" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.agentTransfer"></a>

```typescript
public readonly agentTransfer: CesExampleMessagesChunksAgentTransferOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransferOutputReference">CesExampleMessagesChunksAgentTransferOutputReference</a>

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.image"></a>

```typescript
public readonly image: CesExampleMessagesChunksImageOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImageOutputReference">CesExampleMessagesChunksImageOutputReference</a>

---

##### `toolCall`<sup>Required</sup> <a name="toolCall" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.toolCall"></a>

```typescript
public readonly toolCall: CesExampleMessagesChunksToolCallOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference">CesExampleMessagesChunksToolCallOutputReference</a>

---

##### `toolResponse`<sup>Required</sup> <a name="toolResponse" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.toolResponse"></a>

```typescript
public readonly toolResponse: CesExampleMessagesChunksToolResponseOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference">CesExampleMessagesChunksToolResponseOutputReference</a>

---

##### `agentTransferInput`<sup>Optional</sup> <a name="agentTransferInput" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.agentTransferInput"></a>

```typescript
public readonly agentTransferInput: CesExampleMessagesChunksAgentTransfer;
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksAgentTransfer">CesExampleMessagesChunksAgentTransfer</a>

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.imageInput"></a>

```typescript
public readonly imageInput: CesExampleMessagesChunksImage;
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksImage">CesExampleMessagesChunksImage</a>

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.textInput"></a>

```typescript
public readonly textInput: string;
```

- *Type:* string

---

##### `toolCallInput`<sup>Optional</sup> <a name="toolCallInput" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.toolCallInput"></a>

```typescript
public readonly toolCallInput: CesExampleMessagesChunksToolCall;
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCall">CesExampleMessagesChunksToolCall</a>

---

##### `toolResponseInput`<sup>Optional</sup> <a name="toolResponseInput" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.toolResponseInput"></a>

```typescript
public readonly toolResponseInput: CesExampleMessagesChunksToolResponse;
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponse">CesExampleMessagesChunksToolResponse</a>

---

##### `updatedVariablesInput`<sup>Optional</sup> <a name="updatedVariablesInput" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.updatedVariablesInput"></a>

```typescript
public readonly updatedVariablesInput: string;
```

- *Type:* string

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

---

##### `updatedVariables`<sup>Required</sup> <a name="updatedVariables" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.updatedVariables"></a>

```typescript
public readonly updatedVariables: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CesExampleMessagesChunks;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunks">CesExampleMessagesChunks</a>

---


### CesExampleMessagesChunksToolCallOutputReference <a name="CesExampleMessagesChunksToolCallOutputReference" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.Initializer"></a>

```typescript
import { cesExample } from '@cdktn/provider-google'

new cesExample.CesExampleMessagesChunksToolCallOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.putToolsetTool">putToolsetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.resetArgs">resetArgs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.resetTool">resetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.resetToolsetTool">resetToolsetTool</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putToolsetTool` <a name="putToolsetTool" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.putToolsetTool"></a>

```typescript
public putToolsetTool(value: CesExampleMessagesChunksToolCallToolsetTool): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.putToolsetTool.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetTool">CesExampleMessagesChunksToolCallToolsetTool</a>

---

##### `resetArgs` <a name="resetArgs" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.resetArgs"></a>

```typescript
public resetArgs(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTool` <a name="resetTool" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.resetTool"></a>

```typescript
public resetTool(): void
```

##### `resetToolsetTool` <a name="resetToolsetTool" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.resetToolsetTool"></a>

```typescript
public resetToolsetTool(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.toolsetTool">toolsetTool</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference">CesExampleMessagesChunksToolCallToolsetToolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.argsInput">argsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.toolInput">toolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.toolsetToolInput">toolsetToolInput</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetTool">CesExampleMessagesChunksToolCallToolsetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.args">args</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.tool">tool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCall">CesExampleMessagesChunksToolCall</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `toolsetTool`<sup>Required</sup> <a name="toolsetTool" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.toolsetTool"></a>

```typescript
public readonly toolsetTool: CesExampleMessagesChunksToolCallToolsetToolOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference">CesExampleMessagesChunksToolCallToolsetToolOutputReference</a>

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.argsInput"></a>

```typescript
public readonly argsInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `toolInput`<sup>Optional</sup> <a name="toolInput" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.toolInput"></a>

```typescript
public readonly toolInput: string;
```

- *Type:* string

---

##### `toolsetToolInput`<sup>Optional</sup> <a name="toolsetToolInput" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.toolsetToolInput"></a>

```typescript
public readonly toolsetToolInput: CesExampleMessagesChunksToolCallToolsetTool;
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetTool">CesExampleMessagesChunksToolCallToolsetTool</a>

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.args"></a>

```typescript
public readonly args: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tool`<sup>Required</sup> <a name="tool" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.tool"></a>

```typescript
public readonly tool: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesExampleMessagesChunksToolCall;
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCall">CesExampleMessagesChunksToolCall</a>

---


### CesExampleMessagesChunksToolCallToolsetToolOutputReference <a name="CesExampleMessagesChunksToolCallToolsetToolOutputReference" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.Initializer"></a>

```typescript
import { cesExample } from '@cdktn/provider-google'

new cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.resetToolId">resetToolId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetToolId` <a name="resetToolId" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.resetToolId"></a>

```typescript
public resetToolId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolIdInput">toolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolsetInput">toolsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolId">toolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolset">toolset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetTool">CesExampleMessagesChunksToolCallToolsetTool</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `toolIdInput`<sup>Optional</sup> <a name="toolIdInput" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolIdInput"></a>

```typescript
public readonly toolIdInput: string;
```

- *Type:* string

---

##### `toolsetInput`<sup>Optional</sup> <a name="toolsetInput" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolsetInput"></a>

```typescript
public readonly toolsetInput: string;
```

- *Type:* string

---

##### `toolId`<sup>Required</sup> <a name="toolId" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolId"></a>

```typescript
public readonly toolId: string;
```

- *Type:* string

---

##### `toolset`<sup>Required</sup> <a name="toolset" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolset"></a>

```typescript
public readonly toolset: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetToolOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesExampleMessagesChunksToolCallToolsetTool;
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolCallToolsetTool">CesExampleMessagesChunksToolCallToolsetTool</a>

---


### CesExampleMessagesChunksToolResponseOutputReference <a name="CesExampleMessagesChunksToolResponseOutputReference" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.Initializer"></a>

```typescript
import { cesExample } from '@cdktn/provider-google'

new cesExample.CesExampleMessagesChunksToolResponseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.putToolsetTool">putToolsetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.resetTool">resetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.resetToolsetTool">resetToolsetTool</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putToolsetTool` <a name="putToolsetTool" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.putToolsetTool"></a>

```typescript
public putToolsetTool(value: CesExampleMessagesChunksToolResponseToolsetTool): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.putToolsetTool.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetTool">CesExampleMessagesChunksToolResponseToolsetTool</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTool` <a name="resetTool" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.resetTool"></a>

```typescript
public resetTool(): void
```

##### `resetToolsetTool` <a name="resetToolsetTool" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.resetToolsetTool"></a>

```typescript
public resetToolsetTool(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.toolsetTool">toolsetTool</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference">CesExampleMessagesChunksToolResponseToolsetToolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.responseInput">responseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.toolInput">toolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.toolsetToolInput">toolsetToolInput</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetTool">CesExampleMessagesChunksToolResponseToolsetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.response">response</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.tool">tool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponse">CesExampleMessagesChunksToolResponse</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `toolsetTool`<sup>Required</sup> <a name="toolsetTool" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.toolsetTool"></a>

```typescript
public readonly toolsetTool: CesExampleMessagesChunksToolResponseToolsetToolOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference">CesExampleMessagesChunksToolResponseToolsetToolOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `responseInput`<sup>Optional</sup> <a name="responseInput" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.responseInput"></a>

```typescript
public readonly responseInput: string;
```

- *Type:* string

---

##### `toolInput`<sup>Optional</sup> <a name="toolInput" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.toolInput"></a>

```typescript
public readonly toolInput: string;
```

- *Type:* string

---

##### `toolsetToolInput`<sup>Optional</sup> <a name="toolsetToolInput" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.toolsetToolInput"></a>

```typescript
public readonly toolsetToolInput: CesExampleMessagesChunksToolResponseToolsetTool;
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetTool">CesExampleMessagesChunksToolResponseToolsetTool</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.response"></a>

```typescript
public readonly response: string;
```

- *Type:* string

---

##### `tool`<sup>Required</sup> <a name="tool" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.tool"></a>

```typescript
public readonly tool: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesExampleMessagesChunksToolResponse;
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponse">CesExampleMessagesChunksToolResponse</a>

---


### CesExampleMessagesChunksToolResponseToolsetToolOutputReference <a name="CesExampleMessagesChunksToolResponseToolsetToolOutputReference" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.Initializer"></a>

```typescript
import { cesExample } from '@cdktn/provider-google'

new cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.resetToolId">resetToolId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetToolId` <a name="resetToolId" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.resetToolId"></a>

```typescript
public resetToolId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolIdInput">toolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolsetInput">toolsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolId">toolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolset">toolset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetTool">CesExampleMessagesChunksToolResponseToolsetTool</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `toolIdInput`<sup>Optional</sup> <a name="toolIdInput" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolIdInput"></a>

```typescript
public readonly toolIdInput: string;
```

- *Type:* string

---

##### `toolsetInput`<sup>Optional</sup> <a name="toolsetInput" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolsetInput"></a>

```typescript
public readonly toolsetInput: string;
```

- *Type:* string

---

##### `toolId`<sup>Required</sup> <a name="toolId" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolId"></a>

```typescript
public readonly toolId: string;
```

- *Type:* string

---

##### `toolset`<sup>Required</sup> <a name="toolset" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolset"></a>

```typescript
public readonly toolset: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesExampleMessagesChunksToolResponseToolsetTool;
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksToolResponseToolsetTool">CesExampleMessagesChunksToolResponseToolsetTool</a>

---


### CesExampleMessagesList <a name="CesExampleMessagesList" id="@cdktn/provider-google.cesExample.CesExampleMessagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesExample.CesExampleMessagesList.Initializer"></a>

```typescript
import { cesExample } from '@cdktn/provider-google'

new cesExample.CesExampleMessagesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesExample.CesExampleMessagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cesExample.CesExampleMessagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.cesExample.CesExampleMessagesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cesExample.CesExampleMessagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesExample.CesExampleMessagesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesExample.CesExampleMessagesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesExample.CesExampleMessagesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesExample.CesExampleMessagesList.get"></a>

```typescript
public get(index: number): CesExampleMessagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesExample.CesExampleMessagesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesExample.CesExampleMessages">CesExampleMessages</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesExample.CesExampleMessagesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesExample.CesExampleMessagesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CesExampleMessages[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesExample.CesExampleMessages">CesExampleMessages</a>[]

---


### CesExampleMessagesOutputReference <a name="CesExampleMessagesOutputReference" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.Initializer"></a>

```typescript
import { cesExample } from '@cdktn/provider-google'

new cesExample.CesExampleMessagesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.putChunks">putChunks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.resetChunks">resetChunks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.resetRole">resetRole</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putChunks` <a name="putChunks" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.putChunks"></a>

```typescript
public putChunks(value: IResolvable | CesExampleMessagesChunks[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.putChunks.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunks">CesExampleMessagesChunks</a>[]

---

##### `resetChunks` <a name="resetChunks" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.resetChunks"></a>

```typescript
public resetChunks(): void
```

##### `resetRole` <a name="resetRole" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.resetRole"></a>

```typescript
public resetRole(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.property.chunks">chunks</a></code> | <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksList">CesExampleMessagesChunksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.property.chunksInput">chunksInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunks">CesExampleMessagesChunks</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesExample.CesExampleMessages">CesExampleMessages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `chunks`<sup>Required</sup> <a name="chunks" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.property.chunks"></a>

```typescript
public readonly chunks: CesExampleMessagesChunksList;
```

- *Type:* <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunksList">CesExampleMessagesChunksList</a>

---

##### `chunksInput`<sup>Optional</sup> <a name="chunksInput" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.property.chunksInput"></a>

```typescript
public readonly chunksInput: IResolvable | CesExampleMessagesChunks[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesExample.CesExampleMessagesChunks">CesExampleMessagesChunks</a>[]

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesExample.CesExampleMessagesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CesExampleMessages;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesExample.CesExampleMessages">CesExampleMessages</a>

---


### CesExampleTimeoutsOutputReference <a name="CesExampleTimeoutsOutputReference" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.Initializer"></a>

```typescript
import { cesExample } from '@cdktn/provider-google'

new cesExample.CesExampleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesExample.CesExampleTimeouts">CesExampleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesExample.CesExampleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CesExampleTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesExample.CesExampleTimeouts">CesExampleTimeouts</a>

---



