// src/screens/ActionsScreen.tsx
import { useState } from "react";
import { classesMock, todosMock } from "../data";

interface CustomTodo {
    id: string;
    title: string;
    icon: string;
    kind: "study" | "green";
    relatedTo: string;
}

export function ActionsScreen() {
    const todayClasses = classesMock;
    const [completedTodos, setCompletedTodos] = useState<Record<string, boolean>>({});
    const [customTodos, setCustomTodos] = useState<CustomTodo[]>([]);
    const [showAddModal, setShowAddModal] = useState(false);
    const [newTodoTitle, setNewTodoTitle] = useState("");

    const toggleTodo = (todoId: string) => {
        setCompletedTodos(prev => ({
            ...prev,
            [todoId]: !prev[todoId]
        }));
    };

    const handleAddTodo = () => {
        if (!newTodoTitle.trim()) return;

        const newTodo: CustomTodo = {
            id: `custom-${Date.now()}`,
            title: newTodoTitle,
            icon: "📝",
            kind: "study",
            relatedTo: todayClasses[0].id // Add to first class by default
        };

        setCustomTodos(prev => [...prev, newTodo]);
        setNewTodoTitle("");
        setShowAddModal(false);
    };

    // Combine original todos with custom todos
    const getAllTodos = (classId: string) => {
        const original = todosMock.filter((t) => t.relatedTo === classId);
        const custom = customTodos.filter((t) => t.relatedTo === classId);
        return [...original, ...custom];
    };

    return (
        <div style={{ padding: '24px', background: '#f8f9fa', minHeight: '100vh' }}>
            {/* Header */}
            <div style={{ marginBottom: '24px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: '800', margin: 0, color: '#333' }}>Todo theo môn</h2>
                <div style={{ fontSize: '14px', color: '#666', marginTop: '4px' }}>Việc học + việc xanh (Locket FTU)</div>
            </div>

            {/* Quick Add Card */}
            <div style={{ background: 'white', borderRadius: '12px', padding: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', marginBottom: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <div style={{ fontWeight: '700', fontSize: '16px', color: '#333', marginBottom: '4px' }}>Quick add</div>
                        <div style={{ fontSize: '13px', color: '#666' }}>Tự thêm việc (sẽ nhắc lại vào lần học sau)</div>
                    </div>
                    <button
                        onClick={() => setShowAddModal(true)}
                        style={{
                            padding: '10px 20px',
                            background: '#fe2c55',
                            color: 'white',
                            border: 'none',
                            borderRadius: '6px',
                            fontWeight: '700',
                            cursor: 'pointer',
                            fontSize: '14px'
                        }}
                    >
                        ＋ Thêm
                    </button>
                </div>
                <div style={{ marginTop: '12px', background: '#fff7e6', border: '1px solid #ffe0b2', borderRadius: '8px', padding: '12px', fontSize: '13px', color: '#d35400' }}>
                    Ví dụ: "Mang bình nước", "Note bài chương 3", "Không mua đồ nhựa sau break"
                </div>
            </div>

            {/* Add Todo Modal */}
            {showAddModal && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0,0,0,0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1000
                }}>
                    <div style={{
                        background: 'white',
                        borderRadius: '12px',
                        padding: '24px',
                        width: '90%',
                        maxWidth: '500px',
                        boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
                    }}>
                        <h3 style={{ fontSize: '20px', fontWeight: '700', margin: '0 0 16px 0', color: '#333' }}>Thêm Todo mới</h3>

                        <div style={{ marginBottom: '16px' }}>
                            <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#666', marginBottom: '8px' }}>
                                Nội dung việc cần làm
                            </label>
                            <input
                                type="text"
                                value={newTodoTitle}
                                onChange={(e) => setNewTodoTitle(e.target.value)}
                                placeholder="VD: Mang bình nước, Note bài chương 3..."
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    border: '1px solid #e9ecef',
                                    borderRadius: '8px',
                                    fontSize: '14px',
                                    outline: 'none',
                                    boxSizing: 'border-box'
                                }}
                                onKeyPress={(e) => {
                                    if (e.key === 'Enter') handleAddTodo();
                                }}
                                autoFocus
                            />
                        </div>

                        <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                            <button
                                onClick={() => {
                                    setShowAddModal(false);
                                    setNewTodoTitle("");
                                }}
                                style={{
                                    padding: '10px 20px',
                                    background: '#f1f1f2',
                                    color: '#161823',
                                    border: 'none',
                                    borderRadius: '6px',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    fontSize: '14px'
                                }}
                            >
                                Hủy
                            </button>
                            <button
                                onClick={handleAddTodo}
                                disabled={!newTodoTitle.trim()}
                                style={{
                                    padding: '10px 20px',
                                    background: newTodoTitle.trim() ? '#fe2c55' : '#ddd',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '6px',
                                    fontWeight: '700',
                                    cursor: newTodoTitle.trim() ? 'pointer' : 'not-allowed',
                                    fontSize: '14px'
                                }}
                            >
                                Thêm Todo
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Todo List by Class */}
            <div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '16px', color: '#333' }}>Danh sách Todo</h3>

                {todayClasses.map((cl) => {
                    const list = getAllTodos(cl.id);
                    if (list.length === 0) return null;

                    const completedCount = list.filter(t => completedTodos[t.id]).length;
                    const totalCount = list.length;

                    return (
                        <div key={cl.id} style={{ background: 'white', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', marginBottom: '16px', overflow: 'hidden' }}>
                            {/* Class Header */}
                            <div style={{ background: '#f8f9fa', padding: '16px', borderBottom: '1px solid #e9ecef' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div>
                                        <div style={{ fontWeight: '700', fontSize: '16px', color: '#333' }}>{cl.title}</div>
                                        <div style={{ fontSize: '13px', color: '#666', marginTop: '4px' }}>
                                            {cl.start} – {cl.end} • {cl.room}
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                        <span style={{ background: '#e6fffa', color: '#00b894', padding: '6px 12px', borderRadius: '30px', fontSize: '12px', fontWeight: 'bold' }}>
                                            {completedCount}/{totalCount} hoàn thành
                                        </span>
                                        <span style={{ background: '#fff7e6', color: '#d35400', padding: '6px 12px', borderRadius: '30px', fontSize: '12px', fontWeight: 'bold' }}>
                                            Nhắc trước giờ học
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Todo Items */}
                            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <thead style={{ background: '#fafafa', borderBottom: '1px solid #e9ecef' }}>
                                    <tr style={{ textAlign: 'left', color: '#6c757d', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                        <th style={{ padding: '12px 16px', width: '40px' }}>✓</th>
                                        <th style={{ padding: '12px 16px' }}>Việc cần làm</th>
                                        <th style={{ padding: '12px 16px' }}>Quy tắc</th>
                                        <th style={{ padding: '12px 16px' }}>Loại</th>
                                        <th style={{ padding: '12px 16px', textAlign: 'center' }}>Hành động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {list.map((t) => {
                                        const isCompleted = completedTodos[t.id];
                                        return (
                                            <tr key={t.id} style={{
                                                borderBottom: '1px solid #f1f3f5',
                                                opacity: isCompleted ? 0.6 : 1,
                                                transition: 'opacity 0.2s'
                                            }}>
                                                <td style={{ padding: '16px', textAlign: 'center' }}>
                                                    <button
                                                        onClick={() => toggleTodo(t.id)}
                                                        style={{
                                                            width: '24px',
                                                            height: '24px',
                                                            borderRadius: '6px',
                                                            border: isCompleted ? 'none' : '2px solid #ddd',
                                                            background: isCompleted ? '#00b894' : 'white',
                                                            color: 'white',
                                                            cursor: 'pointer',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            fontSize: '14px',
                                                            fontWeight: 'bold'
                                                        }}
                                                    >
                                                        {isCompleted && '✓'}
                                                    </button>
                                                </td>
                                                <td style={{ padding: '16px' }}>
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                                        <span style={{ fontSize: '24px' }}>{t.icon}</span>
                                                        <div>
                                                            <div style={{
                                                                fontWeight: '600',
                                                                fontSize: '14px',
                                                                color: '#2c3e50',
                                                                textDecoration: isCompleted ? 'line-through' : 'none'
                                                            }}>
                                                                {t.title}
                                                            </div>
                                                            {'desc' in t && t.desc && <div style={{ fontSize: '13px', color: '#666', marginTop: '4px' }}>{t.desc}</div>}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td style={{ padding: '16px', fontSize: '13px', color: '#666' }}>
                                                    {'rule' in t && t.rule ? `⏱ ${t.rule}` : '—'}
                                                </td>
                                                <td style={{ padding: '16px' }}>
                                                    {t.kind === 'green' ? (
                                                        <span style={{ background: '#e6fffa', color: '#00b894', padding: '6px 12px', borderRadius: '30px', fontSize: '12px', fontWeight: 'bold' }}>
                                                            🌿 Green {('points' in t && t.points) ? `(+${t.points})` : ''}
                                                        </span>
                                                    ) : (
                                                        <span style={{ background: '#f1f2f6', color: '#747d8c', padding: '6px 12px', borderRadius: '30px', fontSize: '12px', fontWeight: 'bold' }}>
                                                            📚 Học tập
                                                        </span>
                                                    )}
                                                </td>
                                                <td style={{ padding: '16px', textAlign: 'center' }}>
                                                    {t.kind === 'green' && !isCompleted ? (
                                                        <button style={{
                                                            padding: '8px 16px',
                                                            background: '#fe2c55',
                                                            color: 'white',
                                                            border: 'none',
                                                            borderRadius: '6px',
                                                            cursor: 'pointer',
                                                            fontWeight: '600',
                                                            fontSize: '13px'
                                                        }}>
                                                            📸 Check-in
                                                        </button>
                                                    ) : isCompleted ? (
                                                        <span style={{ fontSize: '13px', color: '#00b894', fontWeight: '600' }}>
                                                            ✓ Hoàn thành
                                                        </span>
                                                    ) : (
                                                        <button
                                                            onClick={() => toggleTodo(t.id)}
                                                            style={{
                                                                padding: '8px 16px',
                                                                background: '#f1f1f2',
                                                                color: '#161823',
                                                                border: 'none',
                                                                borderRadius: '6px',
                                                                cursor: 'pointer',
                                                                fontWeight: '600',
                                                                fontSize: '13px'
                                                            }}
                                                        >
                                                            Đánh dấu
                                                        </button>
                                                    )}
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
