# `designCenterSpace` Submodule <a name="`designCenterSpace` Submodule" id="@cdktn/provider-google.designCenterSpace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DesignCenterSpace <a name="DesignCenterSpace" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_space google_design_center_space}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.Initializer"></a>

```typescript
import { designCenterSpace } from '@cdktn/provider-google'

new designCenterSpace.DesignCenterSpace(scope: Construct, id: string, config: DesignCenterSpaceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig">DesignCenterSpaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig">DesignCenterSpaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.resetEnableGcpSharedTemplates">resetEnableGcpSharedTemplates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.resetGcsBucket">resetGcsBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.putTimeouts"></a>

```typescript
public putTimeouts(value: DesignCenterSpaceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeouts">DesignCenterSpaceTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetEnableGcpSharedTemplates` <a name="resetEnableGcpSharedTemplates" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.resetEnableGcpSharedTemplates"></a>

```typescript
public resetEnableGcpSharedTemplates(): void
```

##### `resetGcsBucket` <a name="resetGcsBucket" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.resetGcsBucket"></a>

```typescript
public resetGcsBucket(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DesignCenterSpace resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.isConstruct"></a>

```typescript
import { designCenterSpace } from '@cdktn/provider-google'

designCenterSpace.DesignCenterSpace.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.isTerraformElement"></a>

```typescript
import { designCenterSpace } from '@cdktn/provider-google'

designCenterSpace.DesignCenterSpace.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.isTerraformResource"></a>

```typescript
import { designCenterSpace } from '@cdktn/provider-google'

designCenterSpace.DesignCenterSpace.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.generateConfigForImport"></a>

```typescript
import { designCenterSpace } from '@cdktn/provider-google'

designCenterSpace.DesignCenterSpace.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DesignCenterSpace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DesignCenterSpace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DesignCenterSpace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_space#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DesignCenterSpace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference">DesignCenterSpaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.enableGcpSharedTemplatesInput">enableGcpSharedTemplatesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.gcsBucketInput">gcsBucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.spaceIdInput">spaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeouts">DesignCenterSpaceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.enableGcpSharedTemplates">enableGcpSharedTemplates</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.gcsBucket">gcsBucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.spaceId">spaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.timeouts"></a>

```typescript
public readonly timeouts: DesignCenterSpaceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference">DesignCenterSpaceTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `enableGcpSharedTemplatesInput`<sup>Optional</sup> <a name="enableGcpSharedTemplatesInput" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.enableGcpSharedTemplatesInput"></a>

```typescript
public readonly enableGcpSharedTemplatesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `gcsBucketInput`<sup>Optional</sup> <a name="gcsBucketInput" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.gcsBucketInput"></a>

```typescript
public readonly gcsBucketInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `spaceIdInput`<sup>Optional</sup> <a name="spaceIdInput" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.spaceIdInput"></a>

```typescript
public readonly spaceIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DesignCenterSpaceTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeouts">DesignCenterSpaceTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `enableGcpSharedTemplates`<sup>Required</sup> <a name="enableGcpSharedTemplates" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.enableGcpSharedTemplates"></a>

```typescript
public readonly enableGcpSharedTemplates: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `gcsBucket`<sup>Required</sup> <a name="gcsBucket" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.gcsBucket"></a>

```typescript
public readonly gcsBucket: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `spaceId`<sup>Required</sup> <a name="spaceId" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.spaceId"></a>

```typescript
public readonly spaceId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpace.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DesignCenterSpaceConfig <a name="DesignCenterSpaceConfig" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.Initializer"></a>

```typescript
import { designCenterSpace } from '@cdktn/provider-google'

const designCenterSpaceConfig: designCenterSpace.DesignCenterSpaceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.location">location</a></code> | <code>string</code> | The location of the space. |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.spaceId">spaceId</a></code> | <code>string</code> | The ID of the space. |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.description">description</a></code> | <code>string</code> | Description for the space. |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.displayName">displayName</a></code> | <code>string</code> | Display name for the space. |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.enableGcpSharedTemplates">enableGcpSharedTemplates</a></code> | <code>boolean \| cdktn.IResolvable</code> | Flag to enable Google opinionated shared templates. |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.gcsBucket">gcsBucket</a></code> | <code>string</code> | An existing Google Cloud Storage bucket that you want to use instead of creating a new bucket during Application Design Center setup. |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_space#id DesignCenterSpace#id}. |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_space#project DesignCenterSpace#project}. |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Input only. |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeouts">DesignCenterSpaceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_space#location DesignCenterSpace#location}

---

##### `spaceId`<sup>Required</sup> <a name="spaceId" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.spaceId"></a>

```typescript
public readonly spaceId: string;
```

- *Type:* string

The ID of the space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_space#space_id DesignCenterSpace#space_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_space#deletion_policy DesignCenterSpace#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description for the space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_space#description DesignCenterSpace#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Display name for the space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_space#display_name DesignCenterSpace#display_name}

---

##### `enableGcpSharedTemplates`<sup>Optional</sup> <a name="enableGcpSharedTemplates" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.enableGcpSharedTemplates"></a>

```typescript
public readonly enableGcpSharedTemplates: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Flag to enable Google opinionated shared templates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_space#enable_gcp_shared_templates DesignCenterSpace#enable_gcp_shared_templates}

---

##### `gcsBucket`<sup>Optional</sup> <a name="gcsBucket" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.gcsBucket"></a>

```typescript
public readonly gcsBucket: string;
```

- *Type:* string

An existing Google Cloud Storage bucket that you want to use instead of creating a new bucket during Application Design Center setup.

If not
provided, a default bucket is created during setup. The bucket must exist
in the same project as the space. Format: {bucket_name}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_space#gcs_bucket DesignCenterSpace#gcs_bucket}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_space#id DesignCenterSpace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_space#project DesignCenterSpace#project}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Input only.

Resource Manager tags to bind to the space at creation, as a
map of namespaced tag keys to tag value short names, for example
'{"123/environment" = "production"}'. For more information, see
https://cloud.google.com/resource-manager/docs/tags/tags-overview.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_space#tags DesignCenterSpace#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DesignCenterSpaceTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeouts">DesignCenterSpaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_space#timeouts DesignCenterSpace#timeouts}

---

### DesignCenterSpaceTimeouts <a name="DesignCenterSpaceTimeouts" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeouts.Initializer"></a>

```typescript
import { designCenterSpace } from '@cdktn/provider-google'

const designCenterSpaceTimeouts: designCenterSpace.DesignCenterSpaceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_space#create DesignCenterSpace#create}. |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_space#delete DesignCenterSpace#delete}. |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_space#update DesignCenterSpace#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_space#create DesignCenterSpace#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_space#delete DesignCenterSpace#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/design_center_space#update DesignCenterSpace#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DesignCenterSpaceTimeoutsOutputReference <a name="DesignCenterSpaceTimeoutsOutputReference" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.Initializer"></a>

```typescript
import { designCenterSpace } from '@cdktn/provider-google'

new designCenterSpace.DesignCenterSpaceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeouts">DesignCenterSpaceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DesignCenterSpaceTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.designCenterSpace.DesignCenterSpaceTimeouts">DesignCenterSpaceTimeouts</a>

---



